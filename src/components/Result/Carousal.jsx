import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ResultCard from '../../assets/resultCard.jpg';
import offStagePoster from '../../assets/Poster/offStage.jpg';
// import onStagePoster from '../assets/Poster/onStage.jpg';
import Firstbadge from '../../assets/Poster/1st.png';
import Secondbadge from '../../assets/Poster/2nd.png';
import '../../styles/Carousal.css';
import '../../styles/Result.css';

const Carousal = () => {
  const Data = [
    {
      program: 'Program 1',
      winner1: 'Winner 1',
      winner2: 'Winner 2',
      id: 1,
      img: ResultCard,
    },
    {
      program: 'Program 2',
      winner1: 'Winner 1',
      winner2: 'Winner 2',
      id: 2,
      img: ResultCard,
    },
    {
      program: 'Program 3',
      winner1: 'Winner 1',
      winner2: 'Winner 2',
      id: 3,
      img: ResultCard,
    },
    {
      program: 'Program 4',
      winner1: 'Winner 1',
      winner2: 'Winner 2',
      id: 4,
      img: ResultCard,
    },
    {
      program: 'Program 5',
      winner1: 'Winner 1',
      winner2: 'Winner 2',
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
            
            <div className="max-w-[450px]  mx-auto shadow-xl relative">

<img src={offStagePoster} alt="offStagePoster" className="w-full h-auto" />
<div className="absolute  h-full w-full top-0 left-0 right-0 bottom-0 flex flex-col">
<div className="basis-1/2">

</div>
<div className="relative flex flex-col basis-1/2 items-center -mt-10 justify-between respo-detials-home">
<div className="font-bold text-lg  respo-program-home">
  {item.program}
</div>
<div className="felx-1 mt-2 h-full min-w-[280px] p-3">
  <div className="flex h-full w-full">
    {/* badge */}
    <div className="basis-3/12 h-full w-full respo-winners-home">
      <div className="flex flex-col gap-4 my-2 respo-badge-home">

        <img src={Firstbadge} alt="Firstbadge" className=" w-12 top-0 " />
        <img src={Secondbadge} alt="Secondbadge" className=" w-12 top-0" />
      </div>
    </div>
    {/* winners */}
    <div className="basis-9/12 h-full w-full">
      <div className="flex flex-col gap-4 my-4 ">
        <div>
          <p className="font-semibold respo-name-home">{item.winner1}</p>
          <p className="respo-year-home">Bsc (2nd Year)</p>
        </div>
        <div>
          <p className="font-semibold respo-name-home">{item.winner2}</p>
          <p className="respo-year-home">Bsc (2nd Year)</p>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
</div>


{/* <img src={Thirdbadge} alt="Thirdbadge" className=" absolute w-full h-auto" /> */}
</div>
            </div>
            {/* {item.id} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousal;
