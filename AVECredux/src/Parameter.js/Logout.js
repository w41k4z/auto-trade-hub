import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './Parameter.css';


const Logout = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();


  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    // Redirect to a new page or perform any other action
    navigate('/')
  };

  return (
    <div className="content">
      <h2>Logout Page</h2>
      <Button
        label="Logout"
        icon="pi pi-power-off"
        onClick={() => setVisible(true)}
      />

      <Dialog
        header="Confirmation"
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => setVisible(false)}
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() => setVisible(false)}
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-text"
              onClick={() => {
                setVisible(false);
                handleLogout();
              }}
            />
          </div>
        }
      >
        Are you sure you want to quit?
      </Dialog>
    </div>
  );
};

export default Logout;
