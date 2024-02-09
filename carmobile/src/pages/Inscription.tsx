import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';

const Inscription: React.FC = () => {
    const history = useHistory();

    const accueil = () => {
        history.push('/accueil');
    };

    return (
    <IonPage>
        <IonContent className="ion-padding">
            <IonTitle>Inscription</IonTitle>
            <IonInput placeholder="Nom" type="text"></IonInput>
            <IonInput placeholder="Prenom" type="text"></IonInput>
            <IonInput placeholder="Email" type="email"></IonInput>
            <IonInput placeholder="Adresse" type="text"></IonInput>
            <IonInput placeholder="Numero de telephone" type="number"></IonInput>
            <IonInput placeholder="Mot de Passe" type="password"></IonInput>
            <IonInput placeholder="Veuillez confirmer votre mot de passe" type="password"></IonInput>
            <IonButton expand="full" onClick={accueil}>S'inscrire</IonButton>
        </IonContent>
    </IonPage>
    );
};

export default Inscription;
