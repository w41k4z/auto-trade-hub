import { IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';

const Status: React.FC = () => {
    return (
        <IonContent>
            <IonLabel>Statusss</IonLabel>
            <Option />
        </IonContent>
    );
};

export default Status;