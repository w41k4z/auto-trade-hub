import './AddAnnouncement.css';
import React, { useState } from 'react';

function AddAnnouncement() {
  const [nom, setNom] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Ajoutez le traitement du formulaire ici
  };

  const displayFileName = (input) => {
    const fileInput = input.files[0];
    const fileNameElement = document.querySelector('.file-name');
    
    if (fileInput) {
      fileNameElement.textContent = 'Fichier sélectionné : ' + fileInput.name;
    } else {
      fileNameElement.textContent = '';
    }
  };

  return (
    <div className="fiche-container">
        <h3>Fill : </h3>
        <form className="fiche-form" action="#" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="form-group">
                {/* <label htmlFor="nom">Nom:</label> */}
                <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required  placeholder="Add product name"/>
            </div>

            <div className="form-group">
                {/* <label htmlFor="model">Modèle:</label> */}
                <input type="text" id="model" name="model" value={model} onChange={(e) => setModel(e.target.value)} required placeholder="Add product model"/>
            </div>

            <div className="form-group">
                {/* <label htmlFor="description">Description:</label> */}
                <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Add description"></textarea>
            </div>

            <div className="form-group">
                {/* <label htmlFor="prix">Prix:</label> */}
                <input type="number" id="prix" name="prix" value={prix} onChange={(e) => setPrix(e.target.value)} required placeholder="Add price"/>
            </div>

            <div className="form-group">
                <p>Upload Image(s):
                <label className="custom-upload" htmlFor="fileInput">Chose file</label>
                <input type="file" id="fileInput" name="images[]" accept="image/*" multiple onChange={(e) => displayFileName(e.target)} />
                </p>
                <span className="file-name"></span>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default AddAnnouncement;
