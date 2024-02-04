import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import offStagePoster from '../../assets/Poster/offStage.jpg';
import Firstbadge from '../../assets/Poster/1st.png';
import Secondbadge from '../../assets/Poster/2nd.png';
import Thirdbadge from '../../assets/Poster/3rd.jpg';
import { fetchRecords } from "../../utils/airtableService";

const Carousal = () => {
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      const tableName = "Published Programs";
      const filterBy = "";
      const sortField = "Created";
      const sortDirection = "asc";
      const maxRecords = 8;
      const Records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection,
        maxRecords
      );
      setResultList(Records);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProgramsData = async () => {
    try {
      const programs = resultList.map((result) => result.fields.Name);
      const allRecords = [];

      for (const program of programs) {
        const tableName = "Result";
        const filterBy = `{Program} = '${program}'`;
        const sortField = "Point";
        const sortDirection = "asc";
        const Records = await fetchRecords(
          tableName,
          filterBy,
          sortField,
          sortDirection
        );

        // Combine all records for the same program
        allRecords.push({
          programName: program,
          records: Records,
        });
      }

      setResult(allRecords);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch program data when resultList changes
  useEffect(() => {
    if (resultList.length > 0) {
      fetchProgramsData();
    }
  }, [resultList]);


  const getBadgeImage = (place) => {
    switch (place) {
      case "FIRST":
        return Firstbadge;
      case "SECOND":
        return Secondbadge;
      case "THIRD":
        return Thirdbadge;
      default:
        return '';
    }
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        {result.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='rounded-md overflow-hidden'>
              <div className="max-w-[450px] mx-auto shadow-xl relative">
                <img src={offStagePoster} alt="offStagePoster" className="w-full h-auto rounded-lg" />
                <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 flex flex-col">
                  <div className="basis-1/2"></div>
                  <div className="relative flex flex-col basis-1/2 items-center -mt-10 justify-between respo-detials-home">
                    <div className="font-bold text-lg respo-program-home">{item.programName}</div>
                    <div className="felx-1 mt-2 h-full min-w-[280px] p-3">
                      <div className="flex h-full w-full">
                        <div className="basis-3/12 h-full w-full respo-winners-home">
                          <div className="flex flex-col gap-4 my-2 respo-badge-home">
                            {item.records.map((record, recordIndex) => (
                              <img
                                key={recordIndex}
                                src={getBadgeImage(record.fields.Place)}
                                alt={`Badge ${record.fields.Place}`}
                                className="w-12 top-0"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="basis-9/12 h-full w-full">
                          <div className="flex flex-col gap-4 my-4 ">
                            {item.records.map((record, recordIndex) => (
                              <div key={recordIndex}>
                                <p className="font-semibold respo-name-home">{record.fields.Name}</p>
                                <p className="respo-year-home">{record.fields.Department} ({record.fields.Year} year)</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousal;
