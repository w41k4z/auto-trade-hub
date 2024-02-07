import {  IonRouterOutlet } from '@ionic/react';
// import './Accueil.css';
import Option from '../components/Option';
import Routing from './Routing';
import { Redirect, Route } from 'react-router';
import Annoucement from './Annoucement';
import Insertion from './Insertion';
import Status from './Status';
import Notification from './Notification';


const Accueil: React.FC = () => {
    return (  
        <>
            <IonRouterOutlet>
                <Route path="/annoucement" component={Annoucement} exact />
                <Route path="/insertion" component={Insertion} exact />
                <Route path="/status" component={Status} exact />
                <Route path="/notification" component={Notification} exact />
                <Redirect from="/option" to="/annoucement" exact />
            </IonRouterOutlet>
            <Annoucement/>
            <Option />
        </>
    );
};

export default Accueil; 