import React, { useState, useEffect, useRef } from "react";

function AllProducts() {
    const images = Object.values(
        import.meta.glob("../../assets/products/*.{jpg,jpeg,png,webp}", {
            eager: true,
            import: "default",
        })
    );

    const imagesPerPage = 4;
    const totalPages = Math.ceil(images.length / imagesPerPage);

    const pages = [];
    for (let i = 0; i < images.length; i += imagesPerPage) {
        pages.push(images.slice(i, i + imagesPerPage));
    }

    const [currentPage, setCurrentPage] = useState(0);
    const [lastInteraction, setLastInteraction] = useState(Date.now());
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Date.now() - lastInteraction > 4000) nextPage();
        }, 2000);
        return () => clearInterval(interval);
    }, [lastInteraction]);

    const nextPage = () => {
        setLastInteraction(Date.now());
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const prevPage = () => {
        setLastInteraction(Date.now());
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const startX = useRef(0);
    const currentTranslate = useRef(0);
    const prevTranslate = useRef(0);
    const isDragging = useRef(false);
    const animationRef = useRef(null);
    const velocity = useRef(0);
    const lastTime = useRef(0);

    const getWidth = () => sliderRef.current.offsetWidth;

    const setSliderPosition = (translate) => {
        sliderRef.current.style.transform = `translateX(${translate}px)`;
    };

    const animateMomentum = () => {
        velocity.current *= 0.95;
        if (Math.abs(velocity.current) < 0.5) {
            const page = Math.round(-currentTranslate.current / getWidth());
            setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
            setSliderPosition(-page * getWidth());
            return;
        }
        currentTranslate.current += velocity.current;
        const maxTranslate = 0;
        const minTranslate = -(totalPages - 1) * getWidth();
        if (currentTranslate.current > maxTranslate) currentTranslate.current = maxTranslate;
        if (currentTranslate.current < minTranslate) currentTranslate.current = minTranslate;

        setSliderPosition(currentTranslate.current);
        animationRef.current = requestAnimationFrame(animateMomentum);
    };

    const onDragStart = (e) => {
        setLastInteraction(Date.now());
        isDragging.current = true;
        startX.current = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        prevTranslate.current = -currentPage * getWidth();
        currentTranslate.current = prevTranslate.current;
        lastTime.current = Date.now();
        velocity.current = 0;
        sliderRef.current.style.transition = "none";
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };

    const onDragMove = (e) => {
        if (!isDragging.current) return;
        const x = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        const delta = x - startX.current;
        const now = Date.now();
        const dt = now - lastTime.current;

        velocity.current = delta / dt * 16;
        lastTime.current = now;

        currentTranslate.current = prevTranslate.current + delta;
        setSliderPosition(currentTranslate.current);
    };

    const onDragEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const pageWidth = getWidth();
        const delta = currentTranslate.current - prevTranslate.current;

        const swipeThreshold = pageWidth * 0.2;

        let targetPage = currentPage;

        if (delta < -swipeThreshold) targetPage = Math.min(currentPage + 1, totalPages - 1);
        else if (delta > swipeThreshold) targetPage = Math.max(currentPage - 1, 0);

        sliderRef.current.style.transition = "transform 0.5s ease-out";
        setCurrentPage(targetPage);
        currentTranslate.current = -targetPage * pageWidth;
        setSliderPosition(currentTranslate.current);
    };


    const onWheel = (e) => {
        e.preventDefault();
        setLastInteraction(Date.now());
        if (e.deltaX > 10) nextPage();
        else if (e.deltaX < -10) prevPage();
    };

    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <button className="arrow-btn left" onClick={prevPage}>❮</button>

                <div
                    className="slider-mask"
                    onMouseDown={onDragStart}
                    onMouseMove={onDragMove}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                    onTouchStart={onDragStart}
                    onTouchMove={onDragMove}
                    onTouchEnd={onDragEnd}
                    onWheel={onWheel}
                >
                    <div
                        className="slider-images"
                        ref={sliderRef}
                        style={{ transform: `translateX(-${currentPage * 100}%)` }}
                    >
                        {pages.map((page, pageIndex) => {
                            const isLastPage = pageIndex === totalPages - 1;
                            const imagesCount = page.length;
                            const lastPageClass = `last-page-${imagesCount}`;
                            return (
                                <div
                                    className={`page ${isLastPage ? lastPageClass : ""}`}
                                    key={pageIndex}
                                >
                                    {page.map((img, imgIndex) => (
                                        <img key={imgIndex} src={img} alt={`product-${imgIndex}`} />
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="arrow-btn right" onClick={nextPage}>❯</button>
            </div>

            <div className="pagination">
                {pages.map((_, index) => (
                    <div
                        key={index}
                        className={`page-dot ${index === currentPage ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllProducts;