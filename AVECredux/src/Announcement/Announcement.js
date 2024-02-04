import './Announcement.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
// import { Panel } from 'primereact/panel';
import { useNavigate } from "react-router-dom";


import React, { useState } from 'react';

function Announcement() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();

    const Info = (id) => {
      navigate('/infoannouncement')

      // Ajoutez le traitement du formulaire ici
    };
  
    return (
      <div className="annonces"> {/* Utilisez className au lieu de class en React */}
        <div className="annonce">
          <a onClick={() => Info(1)}>
            <img src={require('../essaie.jpg')} alt="Annonce 1" />
            <div className="details">
              <h3>Nom de l'annonce 1</h3>
              <p>Description de l'annonce 1...</p>
            </div>
            <div className="etat vendu">Vendu</div>
          </a>
        </div>
  
        {/* <div className="annonce">
          <a href="page_annonce2.html">
            <img src={require('../essaie.jpg')} alt="Annonce 2" />
            <div className="details">
              <h3>Nom de l'annonce 2</h3>
              <p>Description de l'annonce 2...</p>
            </div>
            <div className="etat disponible">Disponible</div>
          </a>
        </div>

        
        <div className="annonce">
          <a href="page_annonce2.html">
            <img src={require('../essaie.jpg')} alt="Annonce 2" />
            <div className="details">
              <h3>Nom de l'annonce 2</h3>
              <p>Description de l'annonce 2...</p>
            </div>
            <div className="etat disponible">Disponible</div>
          </a>
        </div>

        
        <div className="annonce">
          <a href="">
            <img src={require('../essaie.jpg')} alt="Annonce 2" />
            <div className="details">
              <h3>Nom de l'annonce 2</h3>
              <p>Description de l'annonce 2...</p>
            </div>
            <div className="etat disponible">Disponible</div>
          </a>
        </div>

        
        <div className="annonce">
          <a href="page_annonce2.html">
            <img src={require('../essaie.jpg')} alt="Annonce 2" />
            <div className="details">
              <h3>Nom de l'annonce 2</h3>
              <p>Description de l'annonce 2...</p>
            </div>
            <div className="etat disponible">Disponible</div>
          </a>
        </div> */}
      </div>
    );
}

export default Announcement;