import React from 'react';
import { Navigation, Pagination } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import { Event } from '@entities/TimePeriod/model/types'; 

interface EventsSliderProps {
  events: Event[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} 
      navigation 
      pagination={{ clickable: true }} 
      slidesPerView={4} 
      spaceBetween={30}
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="event-slide">
            <h3>{event.year}</h3>
            <p>{event.title}</p>
            <p>{event.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventsSlider;