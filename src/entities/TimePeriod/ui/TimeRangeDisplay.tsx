import React from 'react';
import styles from './TimeRangeDisplay.module.scss';
import { TimePeriod } from '../model/types';

interface TimeRangeDisplayProps {
  period: TimePeriod;
}

const TimeRangeDisplay: React.FC<TimeRangeDisplayProps> = ({ period }) => {
  return (
    <div className={styles.timeRange}>
      <span className={styles.startYear}>{period.startYear}</span>
      <span className={styles.endYear}>{period.endYear}</span>
    </div>
  );
};

export default TimeRangeDisplay; 