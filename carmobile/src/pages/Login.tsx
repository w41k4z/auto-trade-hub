import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText, IonRouterLink } from '@ionic/react';
import './Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {login} from "../"

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let url = import.meta.env.VITE_REACT_APP_URL;
    const history = useHistory();
    const dispatch = useDispatch();
    
    const loginn = async () => {
        const url = "http://172.20.0.144:8080/auto-trade-hub/api/v1/users";
        const body = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post(url, body);
            const data = response.data;
                if(data.payload.accessToken){
                if (data.status === 200) {
                        dispatch(login({
                            user: data.payload.user,
                            accessToken: data.payload.accessToken,
                            role: data.payload.role
                        }))
                    // Store tokens and user info in local storage
                    localStorage.setItem("token", data.payload.accessToken);
                    localStorage.setItem("user", JSON.stringify(data.payload.user));
                    localStorage.setItem("role", data.payload.role);
                    // Navigate to the homepage
                    history.push('/accueil');
                    }
                } else {
                                alert(data.message)
                            }
            }catch (error) {
            alert(`Erreur lors de la connexion: ${error}`);
        }
    };


    // const handleSubmit = async () => {
    //     let url = "http://172.20.0.144:8080/auto-trade-hub/api/v1/users";
    //     const body = {
    //         email: email,
    //         password: password
    //     };

    //     await axios.post(url, body).then(response => {
    //         const data = response.data;
    //             if(data.payload.accessToken){
        //         if (data.status === 200) {
    //                 dispatch(handleSubmit({
    //                     user: data.payload.user,
    //                     accessToken: data.payload.accessToken,
    //                     role: data.payload.role
    //                 }))
    //                 localStorage.setItem("token", data.payload.accessToken);
    //                 localStorage.setItem("user", data.payload.user);
    //                 localStorage.setItem("role", data.payload.role);
    //                 history.push('/accueil');
    //             }
    //         }else{
    //             alert(data.message)
    //         }
    //     }).catch(error =>{
    //         alert(error);
    //     });    
    // };

     


    // const handleSubmit = async () => {
    //     if (!email.includes('@')) {
    //         alert('Veuillez entrer une adresse email valide.');
    //         return;
    //     }
    //     try {
    //         const response = await fetch("http://172.20.0.144:8080/auto-trade-hub/api/v1/users", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         if (response.ok) {
    //             // Connexion réussie, redirigez vers la page d'accueil
    //             window.location.href = '/accueil';
    //         } else {
    //             // Échec de la connexion, affichez un message d'erreur
    //             alert('Échec de la connexion. Veuillez vérifier vos informations.');
    //         }
    //     } catch (error) {
    //         console.error('Erreur lors de la tentative de connexion:', error);
    //         alert('Une erreur est survenue. Veuillez réessayer.');
    //     }
    // };
    

    // const detail = () =>{
    //     // localStorage.setItem("token" , "propla");
    //     history.push('/accueil');
    // };
    return(

    <IonPage>
        <IonContent className="ion-content">
                <IonTitle>Connexion</IonTitle>
                <IonInput className="ion-input" placeholder="Email" type="email" onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                <IonInput className="ion-input" placeholder="Mot de passe" type="password" onIonChange={(e) => setPassword(e.detail.value!)} ></IonInput>
                <IonButton expand="full" onClick={loginn}>Se connecter</IonButton>
                    <IonText>Vous n'avez pas de compte? 
                        <IonRouterLink href="/inscription"> S'inscrire ici.</IonRouterLink>
                    </IonText>
        </IonContent>
    </IonPage>
    );
};

export default Login;
