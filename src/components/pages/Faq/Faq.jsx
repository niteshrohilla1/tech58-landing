import React from "react";
import logo from "../../../assets/tech-logo.png";
import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <div className="faq-page">
            <div className="faq-wrapper">
                <div className="faq-header">
                    <Link to='/tech58-landing/'>
                        <img src={logo} className="img-logo" alt="Tech58" />
                    </Link>
                </div>

                <h1 className="faq-title">FAQ</h1>

                <div className="faq-search-wrapper">
                    <div className="faq-search">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="faq-search-input"
                        />
                    </div>
                </div>

                <div className="faq-content"></div>
            </div>
        </div>
    );
};

export default FAQ;
