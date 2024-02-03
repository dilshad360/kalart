import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ResultCard from '../../assets/resultCard.jpg';

import '../../styles/Carousal.css';

const Carousal = () => {
  const Data = [
    {
      name: 'Result 1',
      id: 1,
      img: ResultCard,
    },
    {
      name: 'Result 2',
      id: 2,
      img: ResultCard,
    },
    {
      name: 'Result 3',
      id: 3,
      img: ResultCard,
    },
    {
      name: 'Result 4',
      id: 4,
      img: ResultCard,
    },
    {
      name: 'Result 5',
      id: 5,
      img: ResultCard,
    },
   
  ];

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='rounded-md overflow-hidden'>
              <p className='absolute text-white font-bold text-2xl top-10 left-10'>{item.name}</p>
              <img src={item.img} alt={`Nature ${item.id}`} />
            </div>
            {/* {item.id} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousal;
