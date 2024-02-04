import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import offStagePoster from '../../assets/Poster/offstage.jpg';
import onStagePoster from '../../assets/Poster/onstage.jpg';
import Firstbadge from '../../assets/Poster/1st.png';
import Secondbadge from '../../assets/Poster/2nd.png';
import Thirdbadge from '../../assets/Poster/3rd.png';
import Union from '../../assets/Poster/40thUnion.png';
import Logo from '../../assets/logo.png';
import { fetchRecords } from "../../utils/airtableService";
import '../../styles/Carousal.css';

const Carousal = () => {
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.log(Records);
    } catch (error) {
      console.error(error);
    }
  };

  const allRecords = [];
  const fetchProgramsData = async () => {
    try {
      const programs = resultList.map((result) => result.fields.Name);

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
          stage: Records[0].fields.Stage,
        });
      }
      setLoading(false);
      setResult(allRecords);
      console.log(allRecords);
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
      {loading ? (
        <div className="rounded-md skeleton-loading flex gap-10 mx-auto">
          <div className="skeleton-item "></div>
          <div className="skeleton-item "></div>
          <div className="skeleton-item "></div>
        </div>
      ) : (

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
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
                  <motion.div
            initial={{ opacity: 0,scale: .5 }}
            whileInView={{ opacity: 1, scale: 1 , transition: { duration: .5, delay: 0.1 } }}
            viewport={{ once: true }}
          >
                <div className='rounded-md '>
                  <div className="max-w-[400px]  mx-auto shadow-xl relative">
                    <img src={item.stage === "OFF STAGE" ? offStagePoster : onStagePoster} alt="offStagePoster" className="w-full h-auto object-cover" />

                    <div className=" top-0 left-0 right-0 bottom-0 absolute ">
                      <div className="flex flex-col justify-between items-center h-full w-full p-4 pt-8 gap-3 overflow-clip">
                        <div>
                          <img src={Union} alt="Union" className="w-44 h-auto mx-auto" />
                        </div>
                        <div>
                          <img src={Logo} alt="Logo" className="w-56 h-auto mx-auto" />
                        </div>
                        <div>
                          <p className="bg-blue-900 text-white font-bold py-1 px-6 rounded-full uppercase text-[16px]">
                            Fine Arts {item.stage} Result
                          </p>
                        </div>
                        <div>
                          <p className="font-bold uppercase">
                            {item.programName}
                          </p>
                        </div>
                        <div className="flex flex-col bg-white/70 rounded-2xl  p-6 gap-2">
                          {item.records.map((record, index) => (
                            <div key={index} className="flex gap-8 items-center">
                              <div>
                                <img src={getBadgeImage(record.fields.Place)} alt={`Badge ${record.fields.Place}`} className="w-10 top-0" />
                              </div>
                              <div>
                                <p className="font-semibold max-text-[16px]">{record.fields.Name}</p>
                                <p className="text-[13px] ml-2">{record.fields.Department}  ({record.fields.Year} year)</p>
                              </div>
                              <div>
                                {/* white space */}
                              </div>
                            </div>
                          ))}
                          <div></div>
                        </div>
                        <div>
                          <p className="italic bg-gradient-to-t from-orange-600 to-yellow-300 text-transparent bg-clip-text font-bold text-2xl">
                            Congratulations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </SwiperSlide>

            ))}
        </Swiper>

      )}
    </>
  );
};

export default Carousal;