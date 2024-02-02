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
        console.log(individualData)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className='my-20 mb-60 '>

      <div className=' w-full ' id='individual'>
        <h1 className=' font-bold text-3xl text-center'>Individual Results</h1>
        {individualData.length ? (
          <div className=" p-2 flex flex-col gap-6 max-w-[600px] mx-auto mt-16">
            {individualData.map((item, index) => (
              <div key={index} className="bg-orange-100 flex justify-between p-4 border-2 border-red-900 px-2 shadow-xl rounded-lg select-none">
                <div className=" basis-1/5 flex items-center justify-center text-6xl font-semibold text-orange-900/60">
                  <p>{index + 1}</p>
                </div>
                <div className=" basis-1/2 flex flex-col justify-center items-start leading-5 py-2 my-2 text-orange-950">
                  <h6 className="font-bold text-lg">{item.fields.Name}</h6>
                  <p>{item.fields.Department} ({item.fields.Year} Year)</p>
                </div>
                <div className=" basis-1/3 flex items-end justify-end px-6 text-orange-950">
                  <p className="font-semibold">{item.fields.Points} <span className="font-medium text-lg">pts</span></p>
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

export default Individual