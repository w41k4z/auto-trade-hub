import React, { useState, useEffect } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";


const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [sexe, setSexe] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [province, setProvince] = useState("");
    const [provinces, setProvinces] = useState([]);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchProvinces();
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/provinces');
            const data = await response.json();
            const datap = data.payload;
            // console.log(data.payload.name); // Ajoutez cette ligne pour voir ce que vous obtenez de l'API
            setProvinces(datap); // Stocke les provinces dans le state
        } catch (error) {
            console.error('Error fetching provinces:', error);
            // Gérer l'erreur
        }
    };

    const onButtonClick = async () => {
        try {
            console.log("SEXE = "+ sexe);
            const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    firstName: firstname,
                    birthDate: birthdate + '',
                    email: email,
                    password: password,
                    phoneNumber : phonenumber,
                    genre: sexe,
                    province: {
                        id: parseInt(province),
                    }
                })
            });
            console.log (response.body);
            const data = await response.json();
            console.log(data); // optional: log the response data
            navigate('/'); // optional: navigate to another page after successful sign in
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Sign in</div>
        </div>
        <br />
        <form onSubmit={onButtonClick}>
        <div className={"inputContainer"}>
            <input
                value={name}
                placeholder="Enter your name"
                onChange={ev => setName(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={firstname}
                placeholder="Enter your first name"
                onChange={ev => setFirstName(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={birthdate}
                placeholder="Enter your birthdate"
                onChange={ev => setBirthDate(ev.target.value)}
                type="date"
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <select
                value={sexe}
                onChange={ev => setSexe(ev.target.value)}
                className={"inputBox"}>
                <option>Choisir</option>
                <option value={1}>Homme</option>
                <option value={2}>Femme</option>
            </select>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={phonenumber}
                placeholder="Enter your phone number"
                onChange={ev => setPhonenumber(ev.target.value)}
                className={"inputBox"} />
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
            <select
                value={province}
                onChange={ev => setProvince(ev.target.value)}
                className={"inputBox"}>
                <option value="">Select your province</option>
                {Array.isArray(provinces) && provinces.map(province => (
                    <option key={province.id} value={province.id}>
                        {province.name}
                    </option>
                ))}
            </select>
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

        </form>
        
    </div>
}

export default Signin;
