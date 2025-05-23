import React, { useState } from 'react';
import gsap from 'gsap';
import { TimePeriod } from '@entities/TimePeriod/model/types';

interface CircularTimelineProps {
  periods: TimePeriod[];
  onPeriodChange: (index: number) => void;
}

const CircularTimeline: React.FC<CircularTimelineProps> = ({ periods, onPeriodChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    gsap.to('.timeline-circle', { duration: 0.5, rotation: index * (360 / periods.length) });
  };

  return (
    <div className="timeline-container">
      <div className="timeline-circle" style={{ transform: `rotate(${activeIndex * (360 / periods.length)}deg)` }}>
        {periods.map((_, index) => (
          <div
            key={index}
            className={`timeline-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              handleClick(index);
              onPeriodChange(index);
            }}
          >
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularTimeline; 