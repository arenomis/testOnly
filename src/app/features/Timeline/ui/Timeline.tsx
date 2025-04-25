import React from 'react';
import { useSelector } from 'react-redux';
import { timelineData } from '../data/timelineData';
import CircleSelector from './CircleSelector';
import EventSlider from './EventSlider';


const Timeline: React.FC = () => {
  const selectedPeriod = useSelector((state: any) => state.timeline.selectedPeriod);

  return (
    <div className="timeline">
      <h2>Исторические даты</h2>
      <CircleSelector />
      <div className="timeline-content">
        <div className="years">
          <span>{timelineData[selectedPeriod].years[0]}</span>
          <span>{timelineData[selectedPeriod].years[1]}</span>
        </div>
        <EventSlider events={timelineData[selectedPeriod].events} />
      </div>
    </div>
  );
};

export default Timeline;