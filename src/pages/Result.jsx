import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecords } from "../utils/airtableService";
import { motion, AnimatePresence } from "framer-motion";
import BgMain from "../assets/bg-kathakali.png";
import bglogo from "../assets/bg-blurlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
function Results() {
  const [resultList, setResultList] = useState([]);
  const [search, setSearch] = useState("");

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
        console.log(Records);
        setResultList(Records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

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
        <NavLink to="/" className="text-black font-semibold text-lg absolute top-6 left-10 z-10">
          <FontAwesomeIcon icon={faAngleLeft} /> &nbsp;Home

        </NavLink>


        <div className="font-bold text-center text-4xl p-10">Results</div>
        <div className="flex justify-center flex-col items-center">
          <input
            type="text"
            placeholder="Search Program"
            className="bg-[#FFEACC] w-full md:w-1/3 h-10 px-6 border-none rounded-lg focus:outline-none mb-6 min-w-[300px]"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {resultList.length ? (
            <div className="flex justify-center items-center gap-10 flex-wrap">
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
                    className="bg-white px-6 py-2 rounded-xl"
                    key={index}
                  >
                    <p className="text-2xl font-medium">{item.fields.Name}</p>
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
            <span className="font-semibold">Loading<FontAwesomeIcon icon={faSpinner} className="animate-spin ml-2" /></span>
          )}
        </div>


      </div>

    </div>
  );
}

export default Results;
