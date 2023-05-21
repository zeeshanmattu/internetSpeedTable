import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";



const PlacesList = () => {
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
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Recent Upload Speed</th>
                <th>Recent Upload Speed Units</th>
                <th>No, of measurements</th>
              </tr>
            </thead>
            <tbody>
                {
                  places.map((place, index) => {
                    return(
                      <tr key={index}>
                        <td>{place.name}</td>
                        <td>{place.city}</td>
                        <td>{place.most_recent_download_speed}</td>
                        <td>{place.most_recent_download_units}</td>
                        <td>{place.number_of_measurements}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      }
    </>
  )
}

const placesList = ReactDOM.createRoot(document.getElementById('places-list-container'));
placesList.render(< PlacesList />)
