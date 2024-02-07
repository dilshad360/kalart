import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecords } from "../utils/airtableService";
import { motion, AnimatePresence } from "framer-motion";
import BgMain from "../assets/bg-kathakali.png";
import bglogo from "../assets/bg-blurlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import offStagePoster from '../assets/Poster/offStage.jpg';
import onStagePoster from '../assets/Poster/onstage.jpg';
import Firstbadge from '../assets/Poster/1st.png';
import Secondbadge from '../assets/Poster/2nd.png';
import Thirdbadge from '../assets/Poster/3rd.png';
import Union from '../assets/Poster/40thUnion.png';
import Logo from '../assets/Poster/logo.png';
import html2canvas from 'html2canvas';
import Congrats from '../assets/Poster/cngrts.png';
import "../styles/Result.css";



function Results() {
  const [resultList, setResultList] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showResultCard, setShowResultList] = useState(true);
  const [showCard, setShowCard] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableName = "Published Programs";
        const filterBy = "";
        const sortField = "auto";
        const sortDirection = "desc";
        const Records = await fetchRecords(
          tableName,
          filterBy,
          sortField,
          sortDirection
        );
        // console.log(Records);
        setResultList(Records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getPrograms = async (item) => {
    setShowCard(false);
    setShowResultList(false);
    const SingleRecord = [];

    try {
      const tableName = "Result";
      const filterBy = `{Program} = '${item.fields.Name}'`;
      const sortField = "Point";
      const sortDirection = `asc`;
      const Records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection
      );
      console.log(Records);
      SingleRecord.push({
        programName: item.fields.Name,
        records: Records,
        stage: Records[0].fields.Stage,
      });
      console.log(SingleRecord);
      setResult(SingleRecord);
      setShowCard(true);
    } catch (error) {
      console.error(error);
    }
  };

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

  const DownloadPoster = async (program) => {
    const card = document.querySelector('.poster-card');

    // Adding a delay of 1000 milliseconds before capturing the canvas
    await new Promise(resolve => setTimeout(resolve, 1000));

    const canvas = await html2canvas(card);
    const imageUrl = canvas.toDataURL('image/jpg');
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `${program}_poster.jpg`;
    a.click();
  };

  const groupRecordsByPlace = (records) => {
    const groupedRecords = {};
    records.forEach((record) => {
      const place = record.fields.Place;
      if (!groupedRecords[place]) {
        groupedRecords[place] = [];
      }
      groupedRecords[place].push(record);
    });
    // console.log(groupedRecords);
    return groupedRecords;
  };
  return (
    <div className="relative h-screen overflow-y-scroll overflow-x-hidden">

      {/* images */}
      <div className="">
        {/* Background Image */}
        <img src={BgMain} alt="bgmain" className="fixed h-screen left-0 inset-0  top-0" />

        {/* Fixed Column on the Right */}
        <div className="fixed top-0 right-0 h-full flex flex-col gap-4 p-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <img key={index} src={bglogo} alt={`bglogo-${index}`} className="h-full w-10" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center justify-center px-10 py-10">
        <NavLink to="/" className="text-black font-semibold text-lg absolute top-6 left-10 z-10 link-custom">
          <FontAwesomeIcon icon={faAngleLeft} /> &nbsp;Home

        </NavLink>


        <div className="font-bold text-center text-4xl p-10">Results</div>
        <div className="flex justify-center flex-col items-center">
          <input
            type="text"
            placeholder="Search Program"
            className="bg-[#FFEACC] w-full md:w-1/3 h-12 px-6 border-none rounded-lg focus:outline-none mb-6 min-w-[300px] focus:shadow-lg transition duration-300 ease-in-out"
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResultList(true);
              setShowCard(false)
            }}
          />
          {showResultCard && (
            <>
              {resultList.length ? (
                <div className="flex justify-center items-center gap-4 flex-wrap p-1">
                  <AnimatePresence>
                    {resultList.filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.fields.Name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    }).map((item, index) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: -300 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: 300, opacity: 0, scale: 0 }}
                        key={index}
                      >
                        <div className="bg-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-300" onClick={() => getPrograms(item)}>
                          <p className="text-lg md:text-2xl font-medium whitespace-nowrap">{item.fields.Name}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {/* When search result empty error msg */}
                  {resultList.filter((val) => val.fields.Name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-rose-500 font-semibold"
                    >
                      No search Found
                    </motion.div>
                  )}
                </div>
              ) : (
                <span className="font-semibold mx-auto">Loading<FontAwesomeIcon icon={faSpinner} className="animate-spin ml-2" /></span>
              )}
            </>
          )}
        </div>

        <div className="mx-auto w-full my-50">
          <AnimatePresence>
            {showCard && (
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ duration: .2, delay: 0.3 }}
                exit={{ opacity: 0, x: 300 }}
                viewport={{ once: true }}
              >
                <div className="max-w-[450px] rounded-lg overflow-hidden  mx-auto shadow-xl relative poster-card ">
                  <img src={result[0].stage === "OFF STAGE" ? offStagePoster : onStagePoster} alt="offStagePoster" className="w-full h-auto object-cover" />
                  <div className="top-0 left-0 right-0 bottom-0 absolute overflow-auto ">
                    <div className="flex flex-col gap-4 md:justify-between items-center h-full w-full p-2  md:scale-100">
                      <div className="flex flex-col items-center justify-between  basis-4/12 p-3">

                        <div>
                          <img src={Union} alt="Union" className=" h-auto mx-auto respo-union pt-4" />
                        </div>
                        <div className="relative">
                          <img src={Logo} alt="Logo" className=" h-auto mx-auto respo-logo" />
                        </div>

                      </div>

                      <div className="flex flex-col items-center justify-between gap-1  h-fit">
                        <p className=" w-full bg-blue-800 md:text-[14px] text-[10px] flex items-center justify-center py-1 px-4 rounded-full text-white font-semibold">
                          Fine Arts {result[0].stage} Result
                        </p>

                        <div>
                          <p className="font-bold uppercase  respo-program">
                            {result[0].programName}
                          </p>
                        </div>
                        <div className="flex flex-col bg-white/70 rounded-xl py-3 p-5 gap-2 respo-result-card">
                          {/* Group records by place and display badge once for each group */}
                          {Object.entries(groupRecordsByPlace(result[0].records)).map(([place, records]) => (
                            <div key={place} className="flex gap-4 items-start">
                              <div>
                                <img src={getBadgeImage(place)} alt={`Badge ${place}`} className="top-0 respo-badge max-w-8 md:max-w-10" />
                              </div>
                              <div className={`${records.length > 1 ? '-mt-1' : 'mt-1 '}`}>
                                {/* Display winner(s) and department(s) for each place */}
                                {records.map((record, index) => (
                                  <div key={index}>
                                    <p className={`font-semibold respo-winner ${records.length > 1 ? 'more-winners' : ''}`}>{record.fields.Name}</p>
                                    <p className={`ml-2 respo-winner-year  ${records.length > 1 ? 'more-winners-year' : ''}`}>{record.fields.Department}  ({record.fields.Year} year)</p>
                                  </div>
                                ))}
                                <div>


                                </div>

                              </div>
                            </div>
                              ))}
                        </div>
                              <img src={Congrats} alt="Congrats" className="w-44 h-auto mx-auto respo-congrats" />


                      </div>
                      <div>
                      </div>

                    </div>

                  </div>
                </div>
                <button className="bg-red-900 text-white font-bold py-3 px-6 rounded-md uppercase text-[16px] mt-4 mx-auto max-w-[450px] w-full flex items-center justify-center transition-all ease-in-out hover:bg-orange-900" onClick={() => DownloadPoster(result[0].programName)}>Download Now</button>
              </motion.div>

            )
            }
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}

export default Results;
