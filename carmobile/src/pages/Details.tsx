import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
// import './Accueil.css';
import Option from '../components/Option';
import Routing from './Routing';
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
                {/* Render car details */}
                {/* <h2>{carDetails.make} {carDetails.model}</h2> */}
                <h2>Model automobile</h2>
                <p>Year: 2015</p>
                {/* ... other details */}

                {/* Image gallery */}
                <Virtuoso
                    style={{ height: '100%', overflowY: 'auto' }} 
                    totalCount={3}
                    itemContent={(index) => (
                        <IonImg
                            style={{ height: 'auto', maxHeight: '100vh', objectFit: 'cover' }}
                            // src={carDetails.images[index]}
                            src='https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                            // alt={`Image ${index + 1}`}
                        />
                    )}
                />
            </IonContent>
            <Option />
        </IonPage>
    );
};

export default Details; 