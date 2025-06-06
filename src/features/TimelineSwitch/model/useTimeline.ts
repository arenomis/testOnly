import { useState } from 'react';
import gsap from 'gsap';
import { TimePeriod } from '@entities/TimePeriod/model/types';

export const useTimeline = (periods: TimePeriod[]) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    gsap.to('.timeline-circle', { duration: 0.5, rotation: index * (360 / periods.length) });
  };

  return {
    activeIndex,
    handleClick,
  };
};