import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [logoutDialogVisible, setLogoutDialogVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    // Redirect to a new page or perform any other action
    navigate('/');
  };
  return (
    <div className="user-profile">
      <div className="user-info">
        <img src={require('../essaie.jpg')} alt="User" className="user-picture" />
        <div className="user-details">
          <p className="user-name">John Doe</p>
          <p className="user-firstname">John</p>
          <p className="user-address">123 Main Street, Cityville</p>
          <p className="user-mail">john.doe@example.com</p>
        </div>
      </div>

      <div className="buttons">
        <Button
          label="Modify"
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success"
        />
        <Button
          label="Logout"
          icon="pi pi-power-off"
          className="p-button-rounded p-button-danger"
          onClick={() => setLogoutDialogVisible(true)}
        />
      </div>

      <Dialog className="warning"
        header=""
        visible={logoutDialogVisible}
        style={{ width: '30vw', border: '1px bold black'}}
        onHide={() => setLogoutDialogVisible(false)}
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() => setLogoutDialogVisible(false)}
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-text"
              onClick={() => {
                setLogoutDialogVisible(false);
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

export default UserProfile;
