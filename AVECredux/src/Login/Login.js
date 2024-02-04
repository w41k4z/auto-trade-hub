import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import App from "../App";
import { connect } from 'react-redux';
import { setUser, setLoading } from './reducer'; 

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [emailError, setEmailError] = useState("DISO eee")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
    const handleLinkClick = () => {
        // Redirect to a specific route/path
        navigate('/signin');
      };

    
    const onButtonClick = () => {
        // Redirect to a specific route/path
        // navigate('/signin');
      };

    
    const loginn = ()  =>{
        props.setUser({ accessToken: 'your_token', role: 'user' }); // Remplacez par les données réelles
        props.setLoading(true);

        let url = "https://carocaz.up.railway.app/api/users/authentification";
        const body = {
            mail : email,
            password : password
        };

        fetch(url, {
            method :'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(body)
        }).then(response =>{
           
            return response.json();
        }).then(response => {
            // console.log(response);
            if(response.errors){
                alert("misy erreur")
            }else{
                navigate('/announcement');
            }
        }).catch(error =>{
            alert(error);
        });

    };

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
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
                onClick={loginn}
                value={"Log in"} />
            {/* <p>Don't have an count yet?  <a href="" onClick={handleLinkClick}>Sign in</a></p> */}

            <p>
          Don't have an account yet?{" "}
          {/* Use Link component for navigation */}
          <span onClick={handleLinkClick} style={{ cursor: "pointer", color: "blue" }}>
            Sign in
          </span>
        </p>
        </div>
    </div>
}

export default Login