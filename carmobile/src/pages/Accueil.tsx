import {  IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
// import './Accueil.css';
import Option from '../components/Option';
import Routing from './Routing';
import { Redirect, Route } from 'react-router';
import Annoucement from './Annoucement';
import Insertion from './Insertion';
import Status from './Status';
import Notification from './Profile';


const Accueil: React.FC = () => {
    return (  
        <IonPage>
            <IonContent>
                <Annoucement />
            </IonContent>
            <Option />
        </IonPage>
    );
};

export default Accueil; 