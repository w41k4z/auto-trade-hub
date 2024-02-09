import '../Announcement/Announcement.css';
import React, { useState } from 'react';

function Banner() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Ajoutez le traitement du formulaire ici
  };

  return (
    <div class="banner">
        {/* <img src={require('../essaie.jpg')} alt="Bannière" /> */}
        <p>Auto-trade</p>
    </div>
  );
}

export default Banner;
