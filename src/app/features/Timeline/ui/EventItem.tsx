import React from 'react';
import './EventItem.scss';

interface EventItemProps {
  event: any;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="event-item">
      <h3>{event.year}</h3>
      <p>{event.description}</p>
    </div>
  );
};

export default EventItem;