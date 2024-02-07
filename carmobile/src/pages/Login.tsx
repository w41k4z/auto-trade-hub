import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText, IonRouterLink } from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router';
import Option from '../components/Option';

const Login: React.FC = () => {
    const history = useHistory();

    const detail = () =>{
        localStorage.setItem("token" , "propla");
        history.push('/accueil');
    };
    return(

    <IonPage>
        <IonContent className="ion-content">
            <IonTitle>Connexion</IonTitle>
            <IonInput className="ion-input" placeholder="Username" type="text"></IonInput>
            <IonInput className="ion-input" placeholder="Password" type="password"></IonInput>
            <IonButton expand="full" onClick={detail}>Se connecter</IonButton>
                <IonText>Vous n'avez pas de compte? 
                    <IonRouterLink href="/inscription"> S'inscrire ici.</IonRouterLink>
                </IonText>
        </IonContent>
    </IonPage>
    );
};

export default Login;
