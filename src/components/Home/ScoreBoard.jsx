import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";
import '../../styles/ScoreBoard.css';
import start1 from '../../assets/star/filled/thinsmooth-1.svg';
import start2 from '../../assets/star/filled/thinsmooth-2.svg';
import start3 from '../../assets/star/filled/thinsmooth-3.svg';
import start4 from '../../assets/star/filled/thinsmooth-4.svg';
import start5 from '../../assets/star/filled/thinsmooth.svg';

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
          <div className="flex justify-between max-w-[800px] flex-wrap gap-4">

            {scoreBoardData.map((item, index) => (
              <div key={index} className={`w-48 h-60 rounded-lg shadow-lg relative card card${index + 1}`}>
                {/* stars for first position */}
                {index === 0 && <div className='absolute -top-7 left-0 w-full  rounded-lg '>
                  <div className="flex h-14 gap-2 items-center justify-around">
                    <img src={start1} className="h-14"/>
                    <img src={start2} className="h-14"/>
                    <img src={start5} className="h-14"/>
                  </div>
                  <div className="flex items-center justify-around ">
                    <img src={start3} className="h-10"/>
                    <img src={start4} className="h-10"/>
                  </div>
                </div>}
                {/* custom css for Positons */}
                <div className={`absolute text-9xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 card-child-${index + 1}`}>{index + 1}</div>
                <div className="flex  items-center justify-center w-full h-full z-10 text-center flex-col">
                  <h6 className={` text-2xl mt-16 font-bold card-team-${index + 1}`}>{item.fields.Name}</h6>
                  <span className="mt-10 text-center text-xl mx-auto font-bold">{item.fields.Total} &nbsp; pts</span>
                </div>
              </div>

            ))}
          </div>
        ) : (<span>Loading...</span>)
        }
      </div>
    </div>


  )
}


export default ScoreBoard