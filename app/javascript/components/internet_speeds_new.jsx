import React, { useEffect, useState } from "react";
import { ReactInternetSpeedMeter } from 'react-internet-meter'

export default InternetSpeedNew = () => {
    const [testInProgress, setTestInProgress] = useState(false)
    const [downloadSpeeds, setDownloadSpeeds] = useState([])
    const onDownloadSpeedChange = (speed) => {
      const newDownloadSpeeds = downloadSpeeds.add(speed);
      if( newDownloadSpeeds.length > 5 ){
        setTestInProgress(false);
        console.log(`Test Finished, results are: ${downloadSpeeds}`)
      }
      setDownloadSpeeds(newDownloadSpeeds)

    }



    return(
      <>
            <div>
              <h1>Log Internet Speed</h1>
            </div>
        		<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<div className="mb-4 md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2 mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
              <div className="mb-6 text-center">
                { testInProgress &&
                  <div>
                    <div>Testing</div>
                    <ReactInternetSpeedMeter
                      txtSubHeading="Internet is too slow"
                      outputType="alert"
                      customClassName={null}
                      txtMainHeading="Opps..."
                      pingInterval={1000} // milliseconds
                      thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte"
                      threshold={0}
                      imageUrl="https://cdn.speedcheck.org/images/reviews/google-speed-test-mobile.jpg"
                      downloadSize="156760"  //bytes
                      callbackFunctionOnNetworkDown={(speed)=>console.log(`Internet speed is down ${speed}`)}
                      callbackFunctionOnNetworkTest={(speed)=>console.log(`Zeeshan ${speed}`)}
                      />
                  </div>
                }
                { !testInProgress && downloadSpeeds.length == 0 &&(
                  <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={()=>setTestInProgress(true)}
                >
                  Submit
                </button>
                )}

							</div>
						</form>
      </>
    )
}
