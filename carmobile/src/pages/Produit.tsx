import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonBadge } from '@ionic/react';

const Produit: React.FC = () => {
    const announcementsData = [
        {
            productName: 'Produit 1',
            price: '$100',
            images: ['https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
        },
        // ... autres produits
    ];

    return (
        <IonList>
            {announcementsData.map((announcement, index) => (
                <IonItem key={index} className="IonItemContainer">
                    <div className="IonThumbnailContainer">
                        {announcement.images.map((imageSrc, idx) => (
                            <IonThumbnail key={idx} className="IonThumbnail" slot="start">
                                <IonImg src={imageSrc} alt={`Image ${idx + 1}`} />
                            </IonThumbnail>
                        ))}
                    </div>
                    <IonLabel className="IonLabel">
                        {announcement.productName}
                        <br />
                        <IonBadge color="success">{announcement.price}</IonBadge>
                        {/* Add additional details here */}
                        <div>{/* Additional details go here */}</div>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
    );
};

export default Produit;
