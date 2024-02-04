import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [firstname, setFirstName] = useState("")
    const [birthdate, setBirthDate] = useState("")
    const [sexe, setSexe] = useState("")


    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    // const navigate = useNavigate();
        
    const onButtonClick = () => {
        // You'll update this function later...
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Sign in</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your name"
                onChange={ev => setName(ev.target.value)}
                className={"inputBox"} />
            {/* <label className="errorLabel">{emailError}</label> */}
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your first name"
                onChange={ev => setFirstName(ev.target.value)}
                className={"inputBox"} />
            {/* <label className="errorLabel">{emailError}</label> */}
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your birthdate"
                onChange={ev => setBirthDate(ev.target.value)}
                type="date"
                className={"inputBox"} />
            {/* <label className="errorLabel">{emailError}</label> */}
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your sexe"
                onChange={ev => setSexe(ev.target.value)}
                className={"inputBox"} />
            {/* <label className="errorLabel">{emailError}</label> */}
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Sign in"} />
        </div>
    </div>
}

export default Signin