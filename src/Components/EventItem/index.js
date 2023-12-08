// EventItem.js
import React from 'react';

const EventItem = ({ eventDetails, setActiveEventId, isActive }) => {
  const handleClick = () => {
    setActiveEventId(eventDetails.id);
  };

  return (
    <div className={`event-item ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <img src={eventDetails.imageUrl} alt={eventDetails.name} />
      {isActive && (
        <div className="event-details">
          <h2>{eventDetails.name}</h2>
          <p>{eventDetails.location}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default EventItem;
