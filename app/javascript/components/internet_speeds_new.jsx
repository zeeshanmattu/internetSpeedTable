import React, { useEffect, useState } from "react";

export default InternetSpeedNew = () => {
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
						</form>
      </>
    )
}
