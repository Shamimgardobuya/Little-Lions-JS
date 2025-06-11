
import React from "react";

import axios from "axios";
import ParentLayout from "./ParentLayout";
import Sincerity from "./assets/Sincerity.png";
import Kindness from "./assets/Kindness.png";
import Dedication from "./assets/Dedication.png";
import Respect from "./assets/Respect.png";



const Values = () => {



  return (
    <div className="container mx-auto p-4 h-136 mb-8 py-24 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Core Values</h1>
      <div className="flex flex-col space-y-16 items-center">
        <div className="flex justify-center space-x-24">
          <div className="flex flex-col items-center">
            <div className="flex items-end space-x-4">
              <img
                src={Sincerity}
                className="h-40"
                alt="Sincerity"
              />
              <label className="text-xl mb-2">Sincerity</label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-end space-x-4">
              <img
                src={Kindness}
                alt="Kindness"
                className="h-40"
              />
              <label className="text-xl mb-2">Kindness</label>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-24">
          <div className="flex flex-col items-center">
            <div className="flex items-end space-x-4">
              <img
                src={Dedication}
                alt="Dedication"
                className="h-40"
              />
              <label className="text-xl mb-2">Dedication</label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-end space-x-4">
              <img
                src={Respect}
                alt="Respect"
                className="h-40"
              />
              <label className="text-xl mb-2">Respect</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Values;