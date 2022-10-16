import "../../styles/Authenticate/StartPageStyle.css"

import React from "react";
import { useNavigate } from "react-router-dom";

function StartPage() {
    const navigate = useNavigate();

    return (
        <div className="startBody">
            <p>Study Buddy</p>
            <button className="buttonStartPage" 
                onClick={() => navigate("/register")}>Register</button>
            <button className="buttonStartPage" 
                onClick={() => navigate("/login")}>Login</button>
        </div>
        // <div className = "testBody">
        //     Study Buddy
        // </div>
    )
}

export default StartPage;