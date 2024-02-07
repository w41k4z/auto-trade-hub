import { IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';

const Notification: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonLabel>Notif be</IonLabel>
            </IonContent>
                <Option />
        </IonPage>
    );
};

export default Notification;