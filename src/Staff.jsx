import React, { useEffect, useState } from "react";
import ParentLayout from "./ParentLayout";
import axios from "axios";
import staffJson from "./DS_STORE/staff.json";


const Staff = () => {
    const [staff, setStaff] =  useState(null)
    const [loading, setLoading ] = useState(true) //while data is being fetched 
    const  [error, setError ] = useState(null)

    useEffect( ()=> { // use effect with empty dependen aarray request is only made once when compononet mounts 
            console.log(typeof(staff))
            if (staffJson && staffJson.length > 0) {
                setLoading(false)
                setStaff(staffJson)
                
            }
            else {
                
                 axios.get(
                `${process.env?.REACT_APP_API_URL}/api/staff`
            ).then(
               function (response) {

                setStaff(response.data.data)
                setLoading(false)

                console.log(response.data)

               }
            ).catch(error => {
                setError(error)
                console.error('Error fetching data:', error);
            });

            }
        


    },
   
    [])

    if (loading) {
    return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!staff) {
        return <p>No data to display.</p>;
    }
    return (
        <div className="py-12 sm:py-16 md:py-24 h-auto mb-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Meet our Staff</h1>
            <div className="flex flex-wrap gap-6 p-2 sm:p-4 justify-center items-center">
                {
                    Array.isArray(staff) ?
                        staff.map((stf, index) =>
                            <div
                                key={index}
                                className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-40 sm:w-48 md:w-56 mb-4"
                            >
                                <img
                                    src={stf.image_path}
                                    alt="Staff"
                                    className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-full mb-2"
                                />
                                <p className="text-center font-semibold">{stf.first_name} {stf.last_name}</p>
                                <p className="text-center text-sm text-gray-600">{stf.role}</p>
                            </div>
                        )
                        :
                        <p className="text-red-500">No staff data available</p>
                }
            </div>
        </div>
    )

}
export default Staff