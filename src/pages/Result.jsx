import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecords } from "../utils/airtableService";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="pt-10 px-10">
      <NavLink to="/" className="text-black text-lg m-4 ">
        Home
      </NavLink>
      <div className="font-bold text-center text-4xl p-10">Results</div>
      <div className="flex justify-center flex-col items-center">
        <input
          type="text"
          placeholder="Search Program"
          className="bg-[#FFEACC] w-full md:w-1/3 h-10 px-6 border-none rounded-lg focus:outline-none mb-6"
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
                initial={{ opacity: 0, scale: 0 , x: -300}}
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
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default Results;
