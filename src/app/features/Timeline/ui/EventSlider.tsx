import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventItem from './EventItem';
import './EventSlider.scss';

interface EventSliderProps {
  events: any[];
}

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  return (
    <div className="event-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventItem event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;