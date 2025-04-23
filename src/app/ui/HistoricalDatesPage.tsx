import React, { useState } from 'react';
import TimeRangeDisplay from '@entities/TimePeriod/ui/TimeRangeDisplay';
import CircularTimeline from '@features/TimelineSwitch/ui/CircularTimeline';
import EventsSlider from '@widgets/EventsSlider/ui/EventsSlider';
import { timePeriods } from '@shared/data/timePeriods';

const HistoricalDatesPage: React.FC = () => {
  const [activePeriodIndex, setActivePeriodIndex] = useState(0);

  return (
    <div>
      <h1>Исторические даты</h1>
      <TimeRangeDisplay period={timePeriods[activePeriodIndex]} />
      <CircularTimeline
        periods={timePeriods}
        onPeriodChange={setActivePeriodIndex}
      />
      <EventsSlider events={timePeriods[activePeriodIndex].events} />
    </div>
  );
};

export default HistoricalDatesPage;