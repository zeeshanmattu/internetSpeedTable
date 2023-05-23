import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default PlacesList = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(()=>{
    const apiEndPoint = `api/places?search_term=${query}`
    fetch(apiEndPoint)
    .then( response => response.json() )
    .then( data => {
      setPlaces(data["places"])
      setLoading(false)
      })
  }, [query])

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const HeaderStyle = "text-sm font-medium text-gray-900 px-6 py-4 text-left";
  const DataStyle = "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";
  const loadedCoctentSection = (body) => {
    return(
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
                <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                        <p>All</p>
                    </div>
                </a>
                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                        <p>Done</p>
                    </div>
                </a>
                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                        <p>Pending</p>
                    </div>
                </a>
            </div>
            <form>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokelineoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                      onChange={handleChange}
                      />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <Link to="/new-internet-speed" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">Add Task</p>
            </Link>
        </div>
        {body}
      </div>
    )
  }

  const tableContent = (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full">
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
  )

  const loadingContent = (
    <div>Loading content...</div>
  )

  return(
    <>
      {
        loading ?
        loadedCoctentSection(loadingContent)
        :
        loadedCoctentSection(tableContent)
      }
    </>
  )
}
