import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
// import './Accueil.css';
import Option from '../components/Option';
import { Redirect, Route } from 'react-router';
import Annoucement from './Annoucement';
import Insertion from './Insertion';
import Status from './Status';
import Notification from './Profile';

const Routing: React.FC = () => {
    return (
        <IonRouterOutlet>
            <Route path="/annoucement" component={Annoucement} exact />
            <Route path="/insertion" component={Insertion} exact />
            <Route path="/status" component={Status} exact />
            <Route path="/notification" component={Notification} exact />
            <Redirect from="/options" to="/annoucement" exact />
        </IonRouterOutlet>
    );
};

export default Routing; 