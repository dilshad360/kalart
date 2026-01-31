import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"
import offStagePoster from '../../assets/Poster/offStage.jpg';
import onStagePoster from '../../assets/Poster/onstage.jpg';
import Firstbadge from '../../assets/Poster/1st.png';
import Secondbadge from '../../assets/Poster/2nd.png';
import Thirdbadge from '../../assets/Poster/3rd.png';
import Union from '../../assets/Poster/40thUnion.png';
import Logo from '../../assets/Poster/logo.png';
import { fetchRecords } from "../../utils/airtableService";
import '../../styles/Carousal.css';
import Congrats from '../../assets/Poster/cngrts.png';
const Carousal = () => {
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const tableName = "Published Programs";
      const filterBy = "";
      const sortField = "auto";
      const sortDirection = "desc";
      const maxRecords = 4;
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

        allRecords.push({
          programName: program,
          records: Records,
          stage: Records[0].fields.Stage,
        });
      }
      setLoading(false);
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

  // Duplicate the results for seamless infinite scroll
  const duplicatedResults = loading ? [] : [...result, ...result, ...result];

  return (
    <div className="marquee-container">
      {loading ? (
        <div className="skeleton-marquee">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton-item"></div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="marquee-track"
          animate={{
            x: [0, -result.length * 370], // 350px width + 20px spacing
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: result.length * 3, // Adjust speed based on number of items
              ease: "linear",
            },
          }}
        >
          {duplicatedResults.map((item, index) => (
            <motion.div
              key={index}
              className="marquee-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='rounded-xl result-card-respo overflow-hidden'>
                <div className="max-w-[400px] mx-auto shadow-xl relative">
                  <img src={item.stage === "OFF STAGE" ? offStagePoster : onStagePoster} alt="offStagePoster" className="w-full h-auto object-cover responsive-poster-img" />

                  <div className=" top-0 left-0 right-0 bottom-0 absolute">
                    <div className="flex flex-col justify-between items-center h-full w-full p-4 pt-8 gap-3 responsive-poster-card">
                      <div>
                        <img src={Union} alt="Union" className="w-40 h-auto mx-auto" />
                      </div>
                      <div className='relative'>
                        <img src={Logo} alt="Logo" className="w-48 h-auto mx-auto" />
                      </div>
                      <div>
                        <p className="bg-blue-900 text-white font-bold py-1 px-6 rounded-full uppercase text-[10px] md:text-[10px]">
                          Fine Arts {item.stage} Result
                        </p>
                      </div>
                      <div>
                        <p className="font-bold uppercase">
                          {item.programName}
                        </p>
                      </div>
                      <div className="flex flex-col bg-white/70 rounded-2xl p-6 gap-2">
                        {item.records.map((record, index) => (
                          <div key={index} className="flex gap-8 items-center">
                            <div>
                              <img src={getBadgeImage(record.fields.Place)} alt={`Badge ${record.fields.Place}`} className="w-10 top-0" />
                            </div>
                            <div>
                              <p className="font-semibold max-text-[16px]">{record.fields.Name}</p>
                              <p className="text-[13px] ml-2">{record.fields.Department} {record.fields.Year && <span> ({record.fields.Year} year) </span> }</p>
                            </div>
                            <div>
                              {/* white space */}
                            </div>
                          </div>
                        ))}
                        <div></div>
                      </div>
                      <div>
                        <img src={Congrats} alt='Congratulations' className='w-40' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Carousal;
