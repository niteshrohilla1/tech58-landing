import React, { useState, useEffect } from "react";
import logo from '../../assets/tech-logo.png';
import togglerIcon from '../../assets/toggler-icon.svg';
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 992) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <img src={logo} className="img-logo" alt="Tech58" />

                    <div className="titles desktop-only">
                        <span>Home</span>
                        <span>About</span>
                        <span>Products</span>
                    </div>

                    <div className="btn-container desktop-only">
                        <div className="login-btn" onClick={() => setLoginOpen(true)}>Log in</div>
                        <div className="signup-btn-header"  onClick={() => setSignUpOpen(true)}>Sign Up</div>
                    </div>

                    <div className="mobile-toggle mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={togglerIcon} alt="" />
                    </div>
                </div>
                <div className={`mobile-menu-wrapper ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-menu">
                        <div className="titles-mobile">
                            <span>Home</span>
                            <span>About</span>
                            <span>Products</span>
                        </div>
                        <div className="btn-container-mobile">
                            <div className="login-btn" onClick={() => setLoginOpen(true)}>Log in</div>
                            <div className="signup-btn-header" onClick={() => setSignUpOpen(true)}>Sign Up</div>
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
            <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)}></SignUpModal>
        </header>
    );
}

export default Navbar;
