import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecords } from "../utils/airtableService";
import { motion, AnimatePresence } from "framer-motion";
import BgMain from "../assets/bg-kathakali.png";
import bglogo from "../assets/bg-blurlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import offStagePoster from '../assets/Poster/offStage.jpg';
// import onStagePoster from '../assets/Poster/onStage.jpg';
import Firstbadge from '../assets/Poster/1st.png';
import Secondbadge from '../assets/Poster/2nd.png';
import Thirdbadge from '../assets/Poster/3rd.jpg';
import "../styles/Result.css";

function Results() {
  const [resultList, setResultList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableName = "Published Programs";
        const filterBy = "";
        const sortField = "Created";
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

    // const fetchResults = async () => {
    //   try {
    //     const tableName = "Results";
    //     const filterBy = "";
    //     const sortField = "Created";
    //     const sortDirection = "desc";
    //     const Results = await fetchRecords(
    //       tableName,
    //       filterBy,
    //       sortField,
    //       sortDirection
    //     );
    //     console.log(Results);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchResults();
    fetchData();
  }, []);

  const getResult = (item) => {
    setSelectedResult(item.fields.Name);
  };
  return (
    <div className="relative h-screen ">

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
            }}
          />
          {resultList.length ? (
            <div className="flex justify-center items-center gap-10 flex-wrap max-h-[410px] overflow-hidden  p-1">
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
                    <div className="bg-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-300" onClick={() => getResult(item)}>
                      <p className="text-2xl font-medium ">{item.fields.Name}</p>
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
        </div>
        {selectedResult && (
          <div className="mx-auto w-full my-20">
            <div className="max-w-[450px]  mx-auto shadow-xl relative">

              <img src={offStagePoster} alt="offStagePoster" className="w-full h-auto" />
<div className="absolute  h-full w-full top-0 left-0 right-0 bottom-0 flex flex-col">
  <div className="basis-1/2">

  </div>
<div className="relative flex flex-col basis-1/2 items-center -mt-10 justify-between">
<div className="font-bold text-lg -mt-1 respo-program">
                {selectedResult}
              </div>
              <div className="felx-1 mt-2 h-full min-w-[280px] p-3">
                <div className="flex h-full w-full">
                  {/* badge */}
                  <div className="basis-3/12 h-full w-full respo-winners">
                    <div className="flex flex-col gap-4 my-2 respo-badge">

                      <img src={Firstbadge} alt="Firstbadge" className=" w-12 top-0 " />
                      <img src={Secondbadge} alt="Secondbadge" className=" w-12 top-0" />
                    </div>
                  </div>
                  {/* winners */}
                  <div className="basis-9/12 h-full w-full">
                    <div className="flex flex-col gap-4 my-4 ">
                      <div>
                        <p className="font-semibold respo-name">Muhammed Saleel</p>
                        <p className="respo-year">Bsc (2nd Year)</p>
                      </div>
                      <div>
                        <p className="font-semibold respo-name">Muhammed Saleel</p>
                        <p className="respo-year">Bsc (2nd Year)</p>
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
        )
        }

      </div>

    </div>
  );
}

export default Results;
