import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";


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
          <h1 className=' font-bold text-2xl text-center'>ScoreBoard</h1>
          { scoreBoardData.length ? (
          <>
            {scoreBoardData.map((item, index)=>(
              <div key={index}>
                  <h6>{item.fields.Name}</h6>
                  <span>{item.fields.Total}</span>
              </div>
            ))}
          </>
          ) : (<span>Loading...</span>)
          }
        </div>
    </div>


  )
}


export default ScoreBoard