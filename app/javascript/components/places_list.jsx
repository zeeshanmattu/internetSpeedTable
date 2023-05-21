import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";



const PlacesList = () => {
  const HeaderStyle = "text-sm font-medium text-gray-900 px-6 py-4 text-left";
  const DataStyle = "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";

  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);


  useEffect(()=>{
    const apiEndPoint = "api/places"
    fetch(apiEndPoint)
    .then( response => response.json() )
    .then( data => {
      setPlaces(data["places"])
      setLoading(false)
      })
  }, [])

  return(
    <>
      {
        loading ?
          <div>Loading content...</div>
        :
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" className={HeaderStyle}>Name</th>
                      <th scope="col" className={HeaderStyle}>City</th>
                      <th scope="col" className={HeaderStyle}>Recent Upload Speed</th>
                      <th scope="col" className={HeaderStyle}>Recent Upload Speed Units</th>
                      <th scope="col" className={HeaderStyle}>No, of measurements</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        places.map((place, index) => {
                          return(
                            <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td className={DataStyle}>{place.name}</td>
                              <td className={DataStyle}>{place.city}</td>
                              <td className={DataStyle}>{place.most_recent_download_speed}</td>
                              <td className={DataStyle}>{place.most_recent_download_units}</td>
                              <td className={DataStyle}>{place.number_of_measurements}</td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

const placesList = ReactDOM.createRoot(document.getElementById('places-list-container'));
placesList.render(< PlacesList />)
