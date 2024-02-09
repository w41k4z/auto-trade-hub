import './AddAnnouncement.css';
import React, { useState } from 'react';
import useSelector from "react-redux";
import { selectToken, selectUser } from "../redux/reducer/UserSlice";

function AddAnnouncement() {
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [years, setYears] = useState("");
  const [phone_number,setPhone_number] = useState("");
  const [car_model,setCar_model] = useState("");
  const [car_models,setCar_models] = useState([]);
  const [powertrain_type,setPowertriain_type] = useState("");
  const [powerTrains,setPowerTrains] = useState([]);
  const [province,setProvince] = useState("");
  const [provinces, setProvinces] = useState([]);






// Provinces
useEffect(() => {
    fetchProvinces();
}, []);

const fetchProvinces = async () => {
    try {
        const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/provinces');
        const data = await response.json();
        const datap = data.payload;
        // console.log(data.payload.name); // Ajoutez cette ligne pour voir ce que vous obtenez de l'API
        setProvinces(datap); // Stocke les provinces dans le state
    } catch (error) {
        console.error('Error fetching provinces:', error);
        // Gérer l'erreur
    }
};

// car models
useEffect(() => {
  fetchCar_model();
}, []);

const fetchCar_model = async () => {
  try {
      const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/car-models');
      const data = await response.json();
      const datap = data.payload;
      setCar_models(datap);
  } catch (error) {
      console.error('Error fetching car models:', error);
  }
};

// power train
useEffect(() => {
  fetchpowerTrain();
}, []);

const fetchpowerTrain = async () => {
  try {
      const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/powertrain-types');
      const data = await response.json();
      const datap = data.payload;
      setPowerTrains(datap);
  } catch (error) {
      console.error('Error fetching car models:', error);
  }
};


  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = useSelector(selectUser);
    const token = useSelector(selectToken); 

    const formData = new FormData();
    formData.append('py', JSON.stringify({
      mileage: parseFloat(mileage),
      price: parseFloat(price),
      years: parseInt(years),
      phone_number: phone_number,
      status: 0, //default value
      car_model_id: parseInt(car_model),
      powertrain_type_id: parseInt(powertrain_type),
      users_id: user.id,
      province_id: parseInt(province)
    }));

    const fileInput = document.getElementById('fileInput');
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('files', fileInput.files[i]);
    }  
    try {
      const response = await fetch('http://localhost:8080/auto-trade-hub/api/v1/announcement', {
        method: 'POST',
        headers: {
          'Authorization': token, // Remplacez VOTRE_TOKEN par votre véritable token
        },
        body: formData,
      });
  
      if (response.ok) {
        alert('Annonce insérée avec succès!');
        document.querySelector('.file-name').textContent = '';
      } else {
        console.error('Échec de l\'insertion de l\'annonce:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };
  

  return (
    <div className="fiche-container">
        <h3>Fill : </h3>
        <form className="fiche-form" action="#" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="number" id="mileage" name="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} required  placeholder="Add mileage"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="prix">Prix:</label> */}
                <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder="Add price"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="model">Modèle:</label> */}
                <input type="number" id="years" name="years" value={years} onChange={(e) => setYears(e.target.value)} required placeholder="Year of production"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="model">Modèle:</label> */}
                <input type="text" id="phone_number" name="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} required placeholder="Add a phone number"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="model">Modèle:</label> */}
                <input type="hidden" id="status" name="status" value={0}/>
            </div>
            <div className="form-group">
            <select
                value={car_model}
                onChange={ev => setCar_model(ev.target.value)}
                className={"inputBox"}>
                <option value="">Select your car model</option>
                {Array.isArray(car_models) && car_models.map(car_model => (
                    <option key={car_models.id} value={car_models.id}>
                        {car_models.name}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-group">
            <select
                value={powertrain_type}
                onChange={ev => setPowertriain_type(ev.target.value)}
                className={"inputBox"}>
                <option value="">Select your Power Train Type</option>
                {Array.isArray(powerTrains) && powerTrains.map(powertrain_type => (
                    <option key={powertrain_type.id} value={powertrain_type.id}>
                        {powertrain_type.name}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-group">
            <select
                value={province}
                onChange={ev => setProvince(ev.target.value)}
                className={"inputBox"}>
                <option value="">Select your province</option>
                {Array.isArray(provinces) && provinces.map(province => (
                    <option key={province.id} value={province.id}>
                        {province.name}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-group">
                <p>Upload Image(s):
                <label className="custom-upload" htmlFor="fileInput">Chose file</label>
                {/* <input type="file" id="fileInput" name="images[]" accept="image/*" multiple onChange={(e) => displayFileName(e.target)} /> */}
                </p>
                <span className="file-name"></span>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default AddAnnouncement;
