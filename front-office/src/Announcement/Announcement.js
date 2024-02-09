import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Announcement.css';

function Announcement() {
    const navigate = useNavigate();
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://ventevoiture-production-1958.up.railway.app/api/annonce");
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const data = await response.json();
                setObjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleInfoClick = (id) => {
        navigate(`/infoannouncement/${id}`);
    };

    return (
        <div className="annonces">
            {objects.map((object, index) => (
                <div className="annonce" key={index}>
                    <a onClick={() => handleInfoClick(object.id)}>
                        <img src={object.image} alt={`Annonce ${index}`} />
                        <div className="details">
                            <h3>{object.title}</h3>
                            <p>{object.description}</p>
                        </div>
                        <div className={`etat ${object.etat}`}>{object.etat}</div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Announcement;
