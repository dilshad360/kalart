import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";
import { motion } from "framer-motion"
import '../../styles/ScoreBoard.css';
import start1 from '../../assets/star/filled/thinsmooth-1.svg';
import start2 from '../../assets/star/filled/thinsmooth-2.svg';
import start3 from '../../assets/star/filled/thinsmooth-3.svg';
import start4 from '../../assets/star/filled/thinsmooth-4.svg';
import start5 from '../../assets/star/filled/thinsmooth.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ScoreBoard() {

  const [scoreBoardData, setScoreBoardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableName = 'Group';
        const filterBy = '';
        const sortField = 'Total';
        const sortDirection = 'desc';
        const Records = await fetchRecords(tableName, filterBy, sortField, sortDirection);
        // console.log(Records);
        setScoreBoardData(Records)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className='my-20'>
      <div className='w-full'>
        <h1 className=' font-bold text-3xl text-center capitalize mb-20'>Score Board</h1>
        {scoreBoardData.length ? (
          <div className=" gap-3   responsive--scoreBoard"  >
            {scoreBoardData.map((item, index) => (
              <>
              {/* <div  key={index}> */}
              {/* by adding div and key={index} giving this for solve error but the responsive 2,2 and 1,1,1,1 and 4
              pattern will fail  */}
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  viewport={{ once: true }} className={`w-56 h-72 rounded-lg shadow-lg relative card card${index + 1}`}>
                  {/* stars for first position */}
                  {index === 0 && <div className='absolute -top-7 left-0 w-full  rounded-lg '>
                    <div className="flex h-14 gap-2 items-center justify-around">
                      <img src={start1} className="h-14" />
                      <img src={start2} className="h-14" />
                      <img src={start5} className="h-14" />
                    </div>
                    <div className="flex items-center justify-around mx-6">
                      <img src={start3} className="h-10" />
                      <img src={start4} className="h-10" />
                    </div>
                  </div>}
                  {/* custom css for Positons */}
                  <div className={`absolute text-9xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 card-child-${index + 1}`}>{index + 1}</div>
                  <div className="flex  items-center justify-center w-full h-full z-10 text-center flex-col">
                    <h6 className={` text-3xl uppercase mt-20 font-bold card-team-${index + 1}`}> {item.fields.Name === 'BSC' ? 'SCIENCE' : item.fields.Name}</h6>

                    <span className="mt-14 text-center text-2xl mx-auto font-bold">{item.fields.Total} <span className="font-semibold text-lg">pts</span></span>
                  </div>
                </motion.div>
                {index % 2 !== 0 && <div className="scoreCard--responsive" />}
              {/* </div> */}
              </>

            ))}
          </div>
        ) : (<div className="mx-auto my-4 w-full  flex items-center justify-center">
          <span className="font-semibold mx-auto">Loading<FontAwesomeIcon icon={faSpinner} className="animate-spin ml-2" /></span>
        </div>)
        }
      </div>
    </div>


  )
}


export default ScoreBoard