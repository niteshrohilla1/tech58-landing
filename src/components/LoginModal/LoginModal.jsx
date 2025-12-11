import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import logo from "../../assets/tech-logo.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import eyeClosedSvg from '../../assets/eye-off.svg';
import eyeSvg from '../../assets/eye-on.svg';


export default function LoginModal({ open, onClose }) {
    if (!open) return null;

    const [showPin, setShowPin] = useState(false);
    const [pinValues, setPinValues] = useState(Array(6).fill(""));
    const [mobileNumber, setMobileNumber] = useState("");
    const [pinError, setPinError] = useState(false);
    const [shake, setShake] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const pinRefs = Array.from({ length: 6 }, () => useRef());

    const handlePinInput = (e, index) => {
        setPinError(false);
        const value = e.target.value.replace(/\D/g, "");

        const updated = [...pinValues];
        updated[index] = value;
        setPinValues(updated);

        if (value && index < 5) pinRefs[index + 1].current.focus();
        else if (!value && index > 0) pinRefs[index - 1].current.focus();
    };

    const triggerShake = () => {
        setShake(false);
        setTimeout(() => setShake(true), 10);
    };

    const handleLogin = () => {
        const pin = pinValues.join("");

        if (!mobileNumber) {
            triggerShake();
            setErrorMessage("Please enter mobile number");
            return;
        }

        if (mobileNumber.length < 12) {
            triggerShake();
            setErrorMessage("Enter valid mobile number");
            return;
        }

        if (!pin) {
            triggerShake();
            setErrorMessage("Please enter PIN");
            return;
        }

        if (pin !== "123456") {
            setPinError(true);
            triggerShake();
            setErrorMessage("Incorrect PIN, Try again.");
            return;
        }

        setErrorMessage("");
        alert("Login successful!");
    };

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-box smooth ${shake ? "shake" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>×</button>

                <img src={logo} alt="Tech58" className="modal-logo" />
                <h2 className="modal-title">Welcome Back</h2>
                <p className="modal-subtitle">Login to continue</p>

                <div className="input-group">
                    <label>Mobile Number<span style={{ color: '#fe0000' }}>*</span></label>
                    <PhoneInput
                        country={"in"}
                        value={mobileNumber}
                        onChange={(value) => setMobileNumber(value)}
                        inputClass="phone-input"
                        buttonClass="phone-flag-btn"
                        containerClass="phone-container"
                        dropdownClass="phone-dropdown"
                    />
                </div>

                <div className="input-group">
                    <div className="input-group-pin">
                        <label>PIN<span style={{ color: '#fe0000' }}>*</span></label>
                        <span
                            className="eye-toggle"
                            onClick={() => setShowPin(!showPin)}
                        >{showPin ? <img src={eyeSvg}></img> : <img src={eyeClosedSvg}></img>}</span>
                    </div>

                    <div className="pin-wrapper">
                        {pinRefs.map((ref, i) => (
                            <input
                                key={i}
                                maxLength="1"
                                ref={ref}
                                type={showPin ? "text" : "password"}
                                placeholder="•"
                                className={`pin-box ${pinError ? "pin-error" : ""}`}
                                value={pinValues[i]}
                                onChange={(e) => handlePinInput(e, i)}
                            />
                        ))}
                    </div>
                </div>

                {errorMessage && <div className="error-text fade">{errorMessage}</div>}

                <div className="forgot-text">Forgot PIN?</div>

                <button className="login-btn-modal" onClick={handleLogin}>
                    Log In
                </button>
            </div>
        </div>,
        document.body
    );
}
