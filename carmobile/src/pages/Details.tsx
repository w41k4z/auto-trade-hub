import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Details.css';
import Option from '../components/Option';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';


const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [carDetails, setCarDetails] = useState(null);

    // useEffect(() => {
    //     // Replace with your actual API call
    //     const fetchCarDetails = async () => {
    //         const response = await fetch(`your-api-endpoint/${id}`);
    //         const data = await response.json();
    //         setCarDetails(data);
    //     };

    //     fetchCarDetails();
    // }, [id]);

    // if (!carDetails) {
    //     return <IonContent>Loading...</IonContent>;
    // }

    return (
        <IonPage>
            <IonHeader>
                {/* <IonToolbar> */}
                    {/* <IonTitle>{carDetails.make} {carDetails.model}</IonTitle> */}
                    {/* <IonTitle>Nissan</IonTitle> */}
                {/* </IonToolbar> */}
            </IonHeader>
            <IonContent>
                <h2>Model automobile</h2>
                <Virtuoso
                    style={{ height: '100%', overflowY: 'auto' }}
                    totalCount={3}
                    itemContent={(index) => (
                        <IonImg className="ion-img"
                            style={{ display:'inline-block', height: 'auto', maxHeight: '100vh', objectFit: 'cover'}}
                            // src={carDetails.images[index]}
                            src='path/image'
                        // alt={`Image ${index + 1}`}
                        />
                    )}
                />
                {/* Render car details */}
                {/* <h2>{carDetails.make} {carDetails.model}</h2> */}
                <p>Annee: 2015</p>
                <p>Categorie: </p>
                <p>Type de transmission: </p>
                <p>Kilometrage</p>
                <p>Prix</p>
                <p>Province</p>
                {/* ... other details */}
                {/* Image gallery */}
            </IonContent>
            <Option />
        </IonPage>
    );
};

export default Details; 