import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CarDetails.css'; // Import your CSS file

const InfoAnnonce = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const fetchAnnonceDetails = async () => {
      try {
        const response = await fetch(`https://ventevoiture-production-1958.up.railway.app/api/annonce/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des détails de l\'annonce');
        }
        const data = await response.json();
        setAnnonce(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnonceDetails();
  }, [id]);

  if (!annonce) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container">
      {/* Left Div: Car Pictures */}
      <div className="car-pictures">
        <div className="inner-card">
          <div className="images">
            <img src={annonce.image} alt={`Annonce ${annonce.id}`} />
          </div>
        </div>
      </div>

      {/* Right Div: Car Information */}
      <div className="car-info">
        <h2>Car Information</h2>
        <table className="table" border={1}>
          <tbody>
            <tr>
              <td className="title"> Seller </td>
              <td className=""> {annonce.seller} </td>
            </tr>
            <tr>
              <td className="title"> Place </td>
              <td className=""> {annonce.place} </td>
            </tr>
            <tr>
              <td className="title"> Model </td>
              <td className=""> {annonce.model} </td>
            </tr>
            <tr>
              <td className="title"> Type </td>
              <td className=""> {annonce.type} </td>
            </tr>
            <tr>
              <td className="title"> Name </td>
              <td className=""> {annonce.name} </td>
            </tr>
            <tr>
              <td className="title"> Price </td>
              <td className=""> {annonce.price} </td>
            </tr>
          </tbody>
        </table>

        {/* Button to send message to the seller */}
        <button className="send-message-button">Send Message to Seller</button>
      </div>
    </div>
  );
};

export default InfoAnnonce;
