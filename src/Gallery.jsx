import React from "react";
import rect1 from "./assets/rectangle28.png"
import rect2 from "./assets/rectangle29.png"
import rect3 from "./assets/rectangle30.png"
import rect4 from "./assets/rectangle31.png"
import rect5 from "./assets/rectangle32.png"
import rect6 from "./assets/rectangle121.png"
import rect7 from "./assets/rectangle122.png"
import rect8 from "./assets/rectangle123.png"
import rect9 from "./assets/rectangle125.png"
import rect10 from "./assets/rectangle126.png"
import rect11 from "./assets/rectangle127.png"
import ParentLayout from "./ParentLayout";


const Gallery = () => {
    return (
        <div className="container mx-auto p-4">
            <ParentLayout>
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="w-40 h-40 bg-gray-200 rounded-lg shadow-lg mb-8 mt-2 -ml-4">
                    <img src={rect1} alt="" />
                </div>
                <div className="w-36 h-36 bg-gray-300 rounded-lg shadow-md mt-8 ml-2">
                   <img src={rect2} alt="" />
                </div>
                <div className="w-44 h-44 bg-gray-100 rounded-lg shadow-lg mb-4 -mr-4">
                     <img src={rect3} alt="" />
                </div>
                <div className="w-32 h-32 bg-gray-200 rounded-lg shadow-md mt-6 ml-6">
                     <img src={rect4} alt="" />
                </div>
                <div className="w-40 h-40 bg-gray-300 rounded-lg shadow-lg mb-10 -ml-2">
                     <img src={rect5} alt="" />
                </div>
                <div className="w-36 h-36 bg-gray-100 rounded-lg shadow-md mt-4 mr-2">
                     <img src={rect6} alt="" />
                </div>
                <div className="w-44 h-44 bg-gray-200 rounded-lg shadow-lg mb-6 ml-4">
                     <img src={rect7} alt="" />
                </div>
                <div className="w-32 h-32 bg-gray-300 rounded-lg shadow-md mt-10 -mr-2">
                     <img src={rect8} alt="" />
                </div>
                <div className="w-40 h-40 bg-gray-100 rounded-lg shadow-lg mb-2 ml-8">
                     <img src={rect9} alt="" />
                </div>
                <div className="w-36 h-36 bg-gray-200 rounded-lg shadow-md mt-8 -ml-6">
                     <img src={rect10} alt="" />
                </div>
                <div className="w-44 h-44 bg-gray-300 rounded-lg shadow-lg mb-8 mr-6">
                     <img src={rect11} alt="" />
                </div>
                
            </div>
            </ParentLayout>
        </div>
    )
}
export default Gallery;