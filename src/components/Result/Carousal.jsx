import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import '../../styles/Carousal.css';

const Carousal = () => {
  const Data = [
    {
      name: 'Nature 1',
      id: 1,
      img: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      name: 'Nature 2',
      id: 2,
      img: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      name: 'Nature 3',
      id: 3,
      img: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      name: 'Nature 4',
      id: 4,
      img: 'https://swiperjs.com/demos/images/nature-4.jpg',
    },
    {
      name: 'Nature 5',
      id: 5,
      img: 'https://swiperjs.com/demos/images/nature-5.jpg',
    },
    {
      name: 'Nature 6',
      id: 6,
      img: 'https://swiperjs.com/demos/images/nature-6.jpg',
    },
    {
      name: 'Nature 7',
      id: 7,
      img: 'https://swiperjs.com/demos/images/nature-7.jpg',
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
