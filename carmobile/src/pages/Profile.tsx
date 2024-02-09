import { IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonTitle>Votre Profile</IonTitle>
            </IonContent>
                <Option />
        </IonPage>
    );
};

export default Profile;