import "../../styles/Authenticate/LoginPageStyle.css"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate();

    const [currentEmail, setCurrentEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentPassword(event.target.value);
    }

    function handleLogin() {
        navigate("/main")
    }

    return (
        <div className="loginBody">
            <p className="websiteTitle">Study Buddy</p>
            <p className="subtitle">Login</p>

            <label>
                Email:
                <input type="text" value={currentEmail} onChange={handleEmailChange} />
            </label><br />
            <label>
                Password:
                <input type="text" value={currentPassword} onChange={handlePasswordChange} />
            </label><br />
            <button className="userButtons" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;