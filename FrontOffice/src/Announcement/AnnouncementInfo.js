import React from 'react';
import './CarDetails.css'; // Import your CSS file

const InfoAnnonce = () => {
  return (
    <div className="car-details-container">
      {/* Left Div: Car Pictures */}
      <div className="car-pictures">
        <img src={require('../essaie.jpg')} alt="Car 1" />
        <img src={require('../essaie.jpg')} alt="Car 2" />
        <img src={require('../essaie.jpg')} alt="Car 3" />
      </div>

      {/* Right Div: Car Information */}
      <div className="car-info">
        <h2>Car Information</h2>
        <p>Seller: John Doe</p>
        <p>Place: Cityville</p>
        <p>Model: XYZ Model</p>
        <p>Type: Sedan</p>
        <p>Name: My Awesome Car</p>
        <p>Price: $20,000</p>

        {/* Button to send message to the seller */}
        <button className="send-message-button">Send Message to Seller</button>
      </div>
    </div>
  );
};

export default InfoAnnonce;
