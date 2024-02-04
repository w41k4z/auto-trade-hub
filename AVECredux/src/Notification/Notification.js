// Notification.js
import React, { useState } from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [isRead, setIsRead] = useState(false);

  const handleRead = () => {
    setShowNotificationBox(true);
  };

  const handleCloseBox = () => {
    setShowNotificationBox(false);
    setIsRead(true); // Mark as read when closing the box
  };

  return (
    <div className={`notification ${isRead ? 'read' : ''}`}>
      {/* <p>{message}</p> */}
      <p>Bisou ee</p>

      {showNotificationBox && (
        <div className="notification-box">
          {/* <p>{message}</p> */}
            <p>Bisou ee</p>

          <button className="bouton" onClick={handleCloseBox}>Close</button>
        </div>
      )}
      {!showNotificationBox && <button className="bouton" onClick={handleRead}>Read</button>}
    </div>
  );
};

export default Notification;
