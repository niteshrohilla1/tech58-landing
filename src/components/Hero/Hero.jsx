import mainImg from '../../assets/main.gif';

function Hero() {
    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-content">

                    <h1 className='text-preset-1'>
                        <span>We Make </span>
                        <span className="scroll-wrapper">
                            <span className="scroll-words" style={{color: '#FD7E14'}}>
                                <span>IT</span>
                                <span>Accounts</span>
                                <span>Business</span>
                                <span>HR</span>
                                <span>Tasks</span>
                            </span>
                        </span>
                        <br />
                        <span>happen</span>
                    </h1>

                    <p className='my-4'>
                        Our suite of SaaS products can help you stay organized, reduce manual work,
                        and focus on what really matters.
                    </p>

                    <div className='btn-buy'>Buy Now</div>
                </div>

                <div>
                    <img className="img-fluid" src={mainImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
