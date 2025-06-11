
import React from "react";


import axios from "axios";
import backgroundRectangle from "./assets/rect.png";
import ParentLayout from "./ParentLayout";
import studentCount from "./assets/ph_student-fill.png"
import lessons from "./assets/lessons.png"
import meals from "./assets/meals.png"
import certified from "./assets/certified.png"




const Statistics = () => {
  

const api_url = import.meta.env?.VITE_API_URL

  return (
    <div className="container mx-auto py-8 h-48  justify-items-center mb-8">



        <div>
            <div className="text-white flex items-stretch space-x-60 py-24 h-72 px-24"  style={{ backgroundImage: `url(${backgroundRectangle})`}}>
                <div>

                    <img src={studentCount} className="h-24 space-y-24" alt="Student" />
                                <label > 150  </label>
                                <label > Students  </label>

                </div>
                <div >
    
                    <img src={lessons} alt="Kindness"  className="h-24 space-y-24"/>
                    <label >006</label> 
                        <label >Lessons</label> 
                </div>

                <div >

                    <img src={meals} alt="Dedication"  className="h-24 space-y-24"/>
                                   <label>  928 </label>
                    <label>  Meals per year </label>

                </div>
                <div >
                  
                    <img src={certified}  className="h-24 space-y-24" />
                    <label >10</label>
                    <label >Certified Teachers</label>
                </div>
          

            
            </div>

          
        </div>
    </div>
  );
};
export default Statistics;