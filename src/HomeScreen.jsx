
import React from "react";
import axios from "axios";
import Values from "./Values";
import Statistics from "./Statistics";
import Staff from "./Staff";
import ParentLayout from "./ParentLayout";
import scroll from './assets/scroll-down.png';

import school from "./assets/school_.jpeg"



const HomeScreen = () => {

  const valuesRef = React.useRef(null);

  const handleClick = () => {
    if (valuesRef.current) {
      valuesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-8 mb-8">
      <div
      className="relative mb-8 h-72 sm:h-96 md:h-136 ml-0 md:ml-40 -mt-4 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${school})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginLeft: "-6%",
        height: '3%',
        width: '112%'
      }}
      >
      <div className="py-12 sm:py-20 md:py-32 px-4 sm:px-8 md:px-12 bg-black bg-opacity-40 h-full flex flex-col justify-center">
        <p className="px-24 py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left">
        About Us
        </p>
        <p
        className="px-24 font-medium text-white text-base sm:text-lg md:text-xl"
        style={{ fontFamily: "Rubik", textAlign: "left" }}
        >
        At Little Lion Junior School, we are dedicated <br className="hidden sm:block" />
        to empowering young minds through innovative <br className="hidden sm:block" />
        learning and a nurturing community. Our mission is <br className="hidden sm:block" />
        to inspire every student to reach their full potential <br className="hidden sm:block" />
        and thrive in an ever-changing world.
        </p>
        <button
        onClick={handleClick}
        className="h-24 bg-green-900 text-white mt-6 sm:mt-8 w-28 sm:w-32 h-8 rounded self-start"
        style={{ marginLeft: "6rem" }} // 6rem = 24px * 6 = 96px, matching px-24
        >
        Scroll down <img src={scroll} alt="Scroll down" className="inline-block w-4 h-4 ml-2"  />
        </button>
      </div>
      </div>
      <section ref={valuesRef}>
      <Values />
      </section>
      <section>
      <Statistics />
      </section>
      <section>
      <Staff />
      </section>
    </div>
    );
};
export default HomeScreen;