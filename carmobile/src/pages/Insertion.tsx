import { IonButton, IonContent, IonHeader, IonItemOption, IonLabel, IonPage, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';
import { useHistory } from 'react-router';

const Insertion: React.FC = () => {
    
    return (
        <IonPage>
            <IonContent>
                <IonLabel>Veuillez inserer votre donnees pour l'annonce</IonLabel>
                    <IonSelect> <IonLabel>Automobile</IonLabel>
                    <IonSelectOption value='nissan'></IonSelectOption>
                </IonSelect>
            </IonContent>
            <Option />
        </IonPage>
    );
};

export default Insertion;