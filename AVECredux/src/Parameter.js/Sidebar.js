import React from 'react';
import { Link } from 'react-router-dom';
import './Parameter.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/modify-user">Modify User Information</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
