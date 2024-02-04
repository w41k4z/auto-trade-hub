import '../Announcement/Announcement.css';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import 'primeicons/primeicons.css';
        


function Search({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Appeler la fonction de recherche avec le texte saisi
    onSearch(searchText);
  };

  return (
      <div className="search-bar">
      <InputText value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Rechercher..."/>
      <button className="bouton" type="submit" onClick={handleSearch}><i className="pi pi-search" style={{ color: 'white' }}></i></button>
    </div>
  );
}


export default Search;
