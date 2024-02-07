import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonLabel} from "@ionic/react";
import Option from "../components/Option";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Annoucement: React.FC = () => {
    // ... other code

    const cars = [
        { id: 1, make: 'Nissan', model: 'Altima', year: '2015', imageUrl: 'path-to-image' },
        // More car objects...
    ];

    const history = useHistory();
    return (
        <IonPage>
            <IonContent className="car-list">
                <IonList>
                    {cars.map((car) => (
                        <IonItem key={car.id} className="car-item">
                            <IonImg className="car-img" src={car.imageUrl} alt={car.make} />
                            <IonLabel>
                                <h2 className="car-name">{car.make} {car.model}</h2>
                                <p className="car-description">{car.year}</p>
                            </IonLabel>
                            {/* <IonButton onClick={() => history.push('/details')} className="details-button">Voir details</IonButton> */}
                            <IonButton routerLink="/details" className="details-button">Voir details</IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Annoucement;
