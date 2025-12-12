import React, { useState } from "react";
import ReactDOM from "react-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../../assets/tech-logo.png";
import "./SignupModal.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupModal({ open, onClose }) {
    if (!open) return null;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [errors, setErrors] = useState({});
    const [otpSent, setOtpSent] = useState(false);
    const [otpValues, setOtpValues] = useState(Array(6).fill(""));
    const notifyError = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);

    const handleOtpChange = (value, index, e) => {
        if (/[^0-9]/.test(value)) return;

        const updated = [...otpValues];
        updated[index] = value;
        setOtpValues(updated);
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
        if (!value && e.key === "Backspace" && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handleSendOTP = () => {
        let newErrors = {};
        if (!firstName.trim()) {
            newErrors.firstName = "Please enter first name";
            notifyError("First name is required & Mobile Number Required");
        } else if (!mobileNumber.trim() || mobileNumber.length < 10) {
            newErrors.mobileNumber = "Please enter valid phone number";
            notifyError("Enter a valid mobile number");
        } else if (!check1) {
            newErrors.check1 = "Required";
            notifyError("Accept Terms & Conditions");
        } else if (!check2) {
            newErrors.check2 = "Required";
            notifyError("Accept Privacy Policy");
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        notifySuccess("OTP Sent Successfully!");
        setOtpSent(true);
    };


    const handleVerifyOTP = () => {
        const otp = otpValues.join("");

        if (otp.length !== 6) {
            notifyError("Enter valid 6-digit OTP");
            return;
        }

        notifySuccess("OTP Verified Successfully!");

        setTimeout(() => {
            notifySuccess("Signup Completed!");
            onClose();
        }, 1200);
    };

    return ReactDOM.createPortal(
        <div className="signup-overlay" onClick={onClose}>
            <div className="signup-box" onClick={(e) => e.stopPropagation()}>
                <button className="signup-close" onClick={onClose}>×</button>
                <img src={logo} alt="Tech58" className="signup-logo" />
                <h2 className="signup-title">My Sign Up Page</h2>
                <>
                    <div className="signup-input-group">
                        <label>First Name*</label>
                        <input
                            type="text"
                            placeholder="Enter First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={`signup-input ${errors.firstName ? "error" : ""}`}
                        />
                    </div>
                    <div className="signup-input-group">
                        <label>Last Name*</label>
                        <input
                            type="text"
                            placeholder="Enter Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`signup-input ${errors.lastName ? "error" : ""}`}
                        />
                    </div>
                    <div className="signup-input-group">
                        <label>Mobile number*</label>
                        <PhoneInput
                            country={"in"}
                            value={mobileNumber}
                            onChange={(value) => setMobileNumber(value)}
                            inputClass={`signup-phone-input ${errors.mobileNumber ? "error" : ""}`}
                            buttonClass="signup-phone-flag"
                            containerClass="signup-phone-container"
                        />
                    </div>
                    <div className="signup-checkbox">
                        <input
                            type="checkbox"
                            checked={check1}
                            onChange={() => setCheck1(!check1)}
                        />
                        <span>
                            I have read & understood <b>Terms of Use & Privacy Policy</b>.
                        </span>
                    </div>
                    <div className="signup-checkbox">
                        <input
                            type="checkbox"
                            checked={check2}
                            onChange={() => setCheck2(!check2)}
                        />
                        <span>I accept the Terms of Use & Privacy Policy.</span>
                    </div>
                    {otpSent && (
                        <div className="otp-box">
                            <label>Enter OTP*</label>
                            <div className="otp-input-row">
                                {otpValues.map((v, i) => (
                                    <input
                                        key={i}
                                        id={`otp-${i}`}
                                        type="number"
                                        maxLength={1}
                                        value={v}
                                        onChange={(e) => handleOtpChange(e.target.value, i, e)}
                                        onKeyDown={(e) => handleOtpChange(e.target.value, i, e)}
                                        className="otp-input"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {!otpSent && (
                        <button className="signup-btn" onClick={handleSendOTP}>
                            Send OTP
                        </button>
                    )}
                    {otpSent && (
                        <button className="verify-btn" onClick={handleVerifyOTP}>
                            Verify OTP
                        </button>
                    )}
                </>
                <ToastContainer position="top-center" autoClose={2500} />
            </div>
        </div>,
        document.body
    );
}
