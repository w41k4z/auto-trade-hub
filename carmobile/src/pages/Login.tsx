import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText, IonRouterLink } from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let url = import.meta.env.VITE_REACT_APP_URL;
    const history = useHistory();

    const connect = async () => {
        if (!email.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        try {
            const response = await fetch(url+'/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                history.push('/accueil');
            } else {
                alert('Échec de la connexion. Veuillez vérifier vos informations.');
            }
        } catch (error) {
            console.error('Erreur lors de la tentative de connexion:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };
    

    // const connect = () =>{
    //     // localStorage.setItem("token" , "propla");
    //     history.push('/accueil');
    // };
    return(

    <IonPage>
        <IonContent className="ion-content">
                <IonTitle>Connexion</IonTitle>
                <IonInput className="ion-input" placeholder="Email" type="email" onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                <IonInput className="ion-input" placeholder="Mot de passe" type="password" onIonChange={(e) => setPassword(e.detail.value!)} ></IonInput>
                <IonButton expand="full" onClick={connect}>Se connecter</IonButton>
                    <IonText>Vous n'avez pas de compte? 
                        <IonRouterLink href="/inscription"> S'inscrire ici.</IonRouterLink>
                    </IonText>
        </IonContent>
    </IonPage>
    );
};

export default Login;
