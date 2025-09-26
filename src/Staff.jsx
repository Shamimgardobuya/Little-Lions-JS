import React, { useEffect, useRef, useState } from "react";
import ParentLayout from "./ParentLayout";
import axios from "axios";
import staffJson from "./DS_STORE/staff.json";
import lodash from "lodash";
import rect from "./assets/Rectangle_43.png";
import cfk_donor from "./assets/cfk_don.png";
import ando from "./assets/ando_don.png";
import good from  "./assets/good_don.png";
import  daraja from  "./assets/daraja_don.png";
import saidika from "./assets/saidika_don.png";



const Staff = () => {
    // const [ data, setData ] = useState(null)
    const [staff, setStaff] =  useState(null)
    const [loading, setLoading ] = useState(true) //while data is being fetched 
    const  [error, setError ] = useState(null)
    const  [mydata, setMydata ] = useState([])
    let check = JSON.parse(localStorage.getItem('staff'))
    console.log("chec", check)
    const date = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {timeZone:   `${process.env.REACT_APP_TIMEZONE}`});
    const formattedDate = formatter.format(date);
    const [ invalidateCache , setInvalidateCache ] = useState(false)
    const fetchData = async () =>    {
        try {
             const headers = {
                    'Accept' : 'application/json'
                }
                
                let response = await axios.get(
                `${process.env?.REACT_APP_API_URL}/api/staff`,
                {headers},
                {withCredentials: true}

                )
                // console.log(response)l
                if (check.length > 0) {
                    console.log("present")
                    setMydata(response.data.data)
                    setStaff(check)
                    setLoading(false)


                }
                if(!lodash.isEqual(response.data.data, JSON.parse(localStorage.getItem('staff')))) {
                    setInvalidateCache(true)
                    let data = localStorage.setItem('staff', JSON.stringify(response.data.data))
                    setStaff(data)
                    setLoading(false)

                }
        } catch (error) {
            setError(error)
            console.error('Error fetching data:', error);
        }
            }
    useEffect( ()=> { 
        fetchData()
        
    },
   
    [ invalidateCache ])
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

                <img src={rect} className="p-y-4" alt="no image" />
            </div>

            <div className="flex flex-wrap gap-12 p-8 sm:p-4 justify-center items-center">
               <img src={good}  className="h-16 sm:h-20 md:h-24 mb-2" alt="" />
               <img src={ando}  className="h-16 sm:h-20 md:h-24 mb-2" alt="" />
               <img src={saidika} className="h-16 sm:h-20 md:h-24 mb-2"  alt="" />
               <img src={daraja} className="h-16 sm:h-20 md:h-24 mb-2" alt="" />
               <img src={cfk_donor} className="h-16 sm:h-20 md:h-24 mb-2" alt="" />


            </div>
        </div>
    )

}
export default Staff