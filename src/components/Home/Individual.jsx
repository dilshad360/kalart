import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";

function Individual() {

  const [individualData, setIndividualData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableName = 'Participants'; 
        const filterBy = '';
        const sortField = 'Points'; 
        const sortDirection = 'desc';
        const maxRecords = 10;
        const Records = await fetchRecords(tableName, filterBy, sortField, sortDirection, maxRecords);
        console.log(Records)
        setIndividualData(Records)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className='my-20'>

    <div className=' w-full ' id='individual'>
      <h1 className=' font-bold text-2xl text-center'>Individual</h1>
      { individualData.length ? (
          <>
            {individualData.map((item, index)=>(
              <div key={index}>
                  <h6>{item.fields.Name}</h6>
                  <p>{item.fields.Department}</p>
                  <p>{item.fields.Points}</p>
              </div>
            ))}
          </>
          ) : (<span>Loading...</span>)
          }
    </div>
    </div>

  )
}

export default Individual