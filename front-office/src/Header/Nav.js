import '../Announcement/Announcement.css';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Nav() {



  const handleSubmit = async (event) => {
    event.preventDefault();
    // Ajoutez le traitement du formulaire ici
  };

  return (
    <div className="navbar">
        <a href="/announcement">Announcements</a>
        <a href="/addannouncement">Add Announcement</a>
        <a href="/notification">Notifications</a>
        <a href="/parameters">Parameters</a>
    </div>
  );
}


export default Nav;
