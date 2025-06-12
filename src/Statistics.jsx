
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
    <div className="container mx-auto py-8 mb-8">
        <div>
            <div
                className="text-white flex flex-col sm:flex-row items-stretch justify-between gap-8 sm:gap-12 md:gap-24 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-24 h-auto"
                style={{ backgroundImage: `url(${backgroundRectangle})` }}
            >
                <div className="flex flex-col items-center">
                    <img src={studentCount} className="h-16 sm:h-20 md:h-24 mb-2" alt="Student" />
                    <label className="text-lg md:text-xl font-bold">150</label>
                    <label className="text-sm md:text-base">Students</label>
                </div>
                <div className="flex flex-col items-center">
                    <img src={lessons} alt="Kindness" className="h-16 sm:h-20 md:h-24 mb-2" />
                    <label className="text-lg md:text-xl font-bold">006</label>
                    <label className="text-sm md:text-base">Lessons</label>
                </div>
                <div className="flex flex-col items-center">
                    <img src={meals} alt="Dedication" className="h-16 sm:h-20 md:h-24 mb-2" />
                    <label className="text-lg md:text-xl font-bold">928</label>
                    <label className="text-sm md:text-base">Meals per year</label>
                </div>
                <div className="flex flex-col items-center">
                    <img src={certified} className="h-16 sm:h-20 md:h-24 mb-2" alt="Certified" />
                    <label className="text-lg md:text-xl font-bold">10</label>
                    <label className="text-sm md:text-base text-center">Certified Teachers</label>
                </div>
            </div>
        </div>
    </div>
);
};
export default Statistics;