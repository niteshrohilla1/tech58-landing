import { memo } from "react";

function Product58Section({
    layout,
    logo,
    title,
    features,
    pattern,
    mainImg,
    hoverImages = [],
    variant,
}) {
    return (
        <section className="hr58-container">
            <div className="hr58-inner">

                {layout !== "image-left" && (
                    <div className="hr58-left">
                        <div className="hr58-divider">
                            <span className="blue" />
                            <span className="red" />
                        </div>
                        <img src={logo} className="hr58-logo" alt="logo" />

                        <h2 className="hr58-title">{title}</h2>

                        {features.map((item, i) => (
                            <div className="hr58-feature" key={i}>
                                <img src={item.icon} className="hr58-icon" alt="" />
                                <div>
                                    <h4>{item.heading}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className="hr58-right"
                    style={pattern ? { "--bg-image": `url(${pattern})` } : {}}
                >

                    <div className="hr58-main-wrapper">
                        <img
                            src={mainImg}
                            className="hr58-main-img"
                            alt="product"
                            style={{
                                boxShadow: `${variant === 'cm58' ? 'none' : '0 28px 70px rgba(16, 18, 22, 0.14)'}`,
                                width: `${variant === 'cm58' ? '100%' : '78%'}`
                            }}
                        />

                        <div className="hr58-cards">
                            {hoverImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className={`hr58-card card-${i + 1}`}
                                    alt=""
                                    style={{
                                        boxShadow: `${variant === 'cm58' ? 'none' : '0 28px 70px rgba(16, 18, 22, 0.14)'}`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {layout === "image-left" && (
                    <div className="hr58-left">
                        <img src={logo} className="hr58-logo" alt="logo" />

                        <div className="hr58-divider">
                            <span className="blue" />
                            <span className="red" />
                        </div>

                        <h2 className="hr58-title">{title}</h2>

                        {features.map((item, i) => (
                            <div className="hr58-feature" key={i}>
                                <img src={item.icon} className="hr58-icon" alt="" />
                                <div>
                                    <h4>{item.heading}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default memo(Product58Section);
