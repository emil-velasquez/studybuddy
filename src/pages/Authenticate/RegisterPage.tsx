import React, { useState } from "react";

function RegisterPage() {
    const [currentName, setCurrentName] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [currentAge, setAge] = useState(0);
    const [currentPronouns, setPronouns] = useState(0);
    const [currentMajor, setCurrentMajor] = useState("");
    const [currentGrade, setGrade] = useState(0);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentPassword(event.target.value);
    }

    function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAge(Number(event.target.value));
    }

    function handlePronounChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setPronouns(Number(event.target.value));
    }

    function handleMajorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentMajor(event.target.value);
    }

    function handleGradeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setGrade(Number(event.target.value));
    }


    return (
        <div>
            <p>Study Buddy</p>
            <p>Register</p>
            <label>
                Name:
                <input type="text" value={currentName} onChange={handleNameChange} />
            </label><br />
            <label>
                Email:
                <input type="text" value={currentEmail} onChange={handleEmailChange} />
            </label><br />
            <label>
                Password:
                <input type="text" value={currentPassword} onChange={handlePasswordChange} />
            </label><br />
            <label>
                Age:
                <input type="number" value={currentAge} onChange={handleAgeChange} />
            </label><br />
            <label>
                Pronouns:
                <select value={currentPronouns} onChange={(e) => handlePronounChange(e)} >
                    <option value="0">Please select pronouns</option>
                    <option value="1">He/Him/His</option>
                    <option value="2">She/Her/Hers</option>
                    <option value="3">They/Them/Theirs</option>
                    <option value="4">Other</option>
                    <option value="5">Prefer not to say</option>
                </select>
            </label><br />
            <label>
                Major:
                <input type="text" value={currentMajor} onChange={handleMajorChange} />
            </label><br />
            <label>
                Grade:
                <select value={currentGrade} onChange={(e) => handleGradeChange(e)} >
                    <option value="0">Please select a grade</option>
                    <option value="1">Freshman</option>
                    <option value="2">Sophomore</option>
                    <option value="3">Junior</option>
                    <option value="4">Senior</option>
                    <option value="5">Super Senior</option>
                </select>
            </label><br />
            <button>Register</button>
        </div>
    )
}

export default RegisterPage;