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
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-200 rounded-lg shadow-lg mb-4">
                         <img src={rect1} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-300 rounded-lg shadow-md">
                         <img src={rect2} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-gray-100 rounded-lg shadow-lg mb-2">
                         <img src={rect3} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg shadow-md">
                         <img src={rect4} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-300 rounded-lg shadow-lg mb-4">
                         <img src={rect5} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-100 rounded-lg shadow-md">
                         <img src={rect6} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-gray-200 rounded-lg shadow-lg mb-2">
                         <img src={rect7} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-300 rounded-lg shadow-md">
                         <img src={rect8} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-100 rounded-lg shadow-lg mb-2">
                         <img src={rect9} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-200 rounded-lg shadow-md">
                         <img src={rect10} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-gray-300 rounded-lg shadow-lg mb-2">
                         <img src={rect11} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
               </div>
          </ParentLayout>
     </div>
)
}
export default Gallery;