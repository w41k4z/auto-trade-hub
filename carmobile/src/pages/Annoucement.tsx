import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonLabel} from "@ionic/react";
import Option from "../components/Option";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Annoucement: React.FC = () => {

    const cars = [
        { id: 1, make: 'Nissan', model: 'Altima', year: '2015', imageUrl: 'path-to-image' },
    ];

    const history = useHistory();
    return (
        <IonList>
            {cars.map((car) => (
                <IonItem key={car.id} className="car-item">
                    <IonImg className="car-img" src={car.imageUrl} alt={car.make} />
                    <IonLabel>
                        <h2 className="car-name">{car.make} {car.model}</h2>
                        <p className="car-description">{car.year}</p>
                    </IonLabel>
                    <IonButton routerLink="/details" className="details-button">Voir details</IonButton>
                </IonItem>
            ))}
        </IonList>
    );
};

export default Annoucement;
