import { useState } from "react";
import "./styles/Notification.css";

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "User John Doe has been added.", timestamp: new Date().toLocaleString(), read: false },
    { id: 2, message: "Book 'React for Beginners' has been added.", timestamp: new Date().toLocaleString(), read: false },
    { id: 3, message: "Transaction for user ID 1 has been created.", timestamp: new Date().toLocaleString(), read: false }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>

      {/* Notification List */}
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className={`notification-item ${notification.read ? "read" : ""}`}>
            <span>{notification.message}</span>
            <span className="notification-timestamp">{notification.timestamp}</span>
            <button onClick={() => handleMarkAsRead(notification.id)} className="mark-read-button">
              Mark as Read
            </button>
            <button onClick={() => handleDeleteNotification(notification.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
