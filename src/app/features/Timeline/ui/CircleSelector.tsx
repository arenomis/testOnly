import React, { useEffect } from 'react'; // Теперь useEffect импортирован
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPeriod } from '../model/slice';
import { timelineData } from '../data/timelineData';
import styles from './CircleSelector.module.scss';
import { gsap } from 'gsap';

const CircleSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPeriod = useSelector((state: any) => state.timeline.selectedPeriod);

  useEffect(() => {
    gsap.from(`.${styles.circle}`, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <div className={styles['circle-selector']}>
      {timelineData.map((period, index) => (
        <div
          key={period.id}
          className={`${styles.circle} ${index === selectedPeriod ? styles.active : ''}`}
          onClick={() => dispatch(setSelectedPeriod(index))}
        >
          <span>{period.id}</span>
          <span>{period.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CircleSelector;