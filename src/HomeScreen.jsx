
import React from "react";
import axios from "axios";
import Values from "./Values";
import Statistics from "./Statistics";
import Staff from "./Staff";
import ParentLayout from "./ParentLayout";

import school from "./assets/school_.jpeg"



const HomeScreen = () => {
  const handleClick = () => {
    
    
  };


  return (

    <div className="container ">
    <ParentLayout>
     
      <div className="h-136 mb-8  ml-40 -mt-4 w-full" style={{ backgroundImage: `url(${school})`, backgroundRepeat: "no-repeat" , maxWidth: '100%'}}>
      <div className="py-32 px-12">
        <p className="py-8 text-4xl font-bold  text-white" style={{ textAlign : "left"}} >About Us</p>
        <p className="font-weight-500 text-white text-xl " style={{ fontFamily: "Rubik", textAlign: "left"}}>
        At Little Lion Junior School, we are dedicated <br /> to empowering young minds through innovative <br /> learning and a nurturing community.
        Our mission is <br />to inspire every student to reach their full potential <br />and thrive in an ever-changing world.
        </p>
        <button
        onClick={handleClick}
        className="bg-green-900 absolute  left-0  text-white mt-8  w-32 h-8  rounded ml-52"
        >
        Scroll down
        </button>
      </div>
      </div>
      <section>
      <Values />
      </section>
      <section>
      <Statistics />
      </section>
      <section>
      <Staff />
      </section>

    </ParentLayout>
     
    </div>
    );
};
export default HomeScreen;