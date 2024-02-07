import { IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';

const Notification: React.FC = () => {
    return (
        <IonContent>
            <IonLabel>Notif be</IonLabel>
            <Option />
        </IonContent>
    );
};

export default Notification;