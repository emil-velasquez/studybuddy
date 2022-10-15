import "../../styles/Authenticate/StartPageStyle.css"

import React from "react";
import { useNavigate } from "react-router-dom";

function StartPage() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Study Buddy</p>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default StartPage;