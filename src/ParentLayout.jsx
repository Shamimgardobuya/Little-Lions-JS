import React from "react";
import background from "./assets/rectangle33.png"
import logo from "./assets/logo.png"
import email from "./assets/baseline-email.png"
import phone from "./assets/phone-fill.png"
import locationFooter from "./assets/locationFooter.png"
import workingHours from "./assets/ion_time.png"
import navbarImage from "./assets/rectangle9.png"
import rectangleImage from "./assets/rectangle33.png"
import { Link } from "react-router-dom";
import Phone from "./assets/iPhoneSE.png"
import Email from "./assets/Email.png"
import LocationNav from "./assets/LocationNav.png"


const ParentLayout = ({children}) => {
   
    return (
      <div className="w-full" style={{width: '100%'}}>
        {/* Top Contact Bar */}
        <nav
          className="h-16 w-full"
          style={{ backgroundImage: `url(${navbarImage})` }}
        >
          <ul className="flex flex-col sm:flex-row sm:justify-end items-center gap-2 sm:gap-8 px-4 py-2 text-white text-xs sm:text-sm md:text-base">
            <li
              className="flex items-center w-full sm:w-auto"
              style={{
                backgroundImage: `url(${Phone})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "24px",
                backgroundPosition: "left center",
              }}
            >
              <p className="pl-8">0721633782/0717539365</p>
            </li>
            <li
              className="flex items-center w-full sm:w-auto"
              style={{
                backgroundImage: `url(${Email})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "24px",
                backgroundPosition: "left center",
              }}
            >
              <p className="pl-8">littlelionsjunior@gmail.com</p>
            </li>
            <li
              className="flex items-center w-full sm:w-auto"
              style={{
                backgroundImage: `url(${LocationNav})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "24px",
                backgroundPosition: "left center",
              }}
            >
              <p className="pl-8">Kibera, Nairobi, Kenya</p>
            </li>
          </ul>
        </nav>
        {/* Main Navigation */}
        <nav>
          <ul className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-6">
            <li>
              <img
                src={logo}
                className="h-12 sm:h-20 w-auto"
                alt="Logo"
              />
            </li>
            <li style={{ fontFamily: "Rubik" }}>
              <Link to="/home">Home</Link>
            </li>
            <li style={{ fontFamily: "Rubik" }}>
              <Link to="/programs">Programs</Link>
            </li>
            <li style={{ fontFamily: "Rubik" }}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li style={{ fontFamily: "Rubik" }}>
              <Link to="/contact">Contact us</Link>
            </li>
            <li style={{ fontFamily: "Rubik" }}>
              <Link
                to="/paypal"
                className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
        {/* Page Content */}
        <main className="w-full">{children}</main>
        {/* Footer */}
        <footer>
          <div
            className="w-full py-8 px-4 md:px-16"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Logo and Description */}
              <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <img
                    src={logo}
                    alt=""
                    className="h-16 md:h-24 mr-2"
                  />
                  <span>
                    <label className="font-normal">
                      Little Lions <br />
                      Junior School
                    </label>
                  </span>
                </div>
                <p
                  className="text-left text-xs md:text-base"
                  style={{ fontFamily: "Rubik" }}
                >
                  Welcome to Little Lion Junior School, <br />
                  where education inspires and empowers <br />
                  every student to excel. We foster a collaborative <br />
                  community that makes a difference. Our CBC curriculum <br />
                  blends tradition with innovation, <br />
                  preparing students for a global <br />
                  future. Explore our programs, values, and vibrant community. <br />
                </p>
              </div>
              {/* Contact Info */}
              <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                <h2
                  className="text-lg md:text-2xl font-normal mb-2"
                  style={{ fontFamily: "Rubik" }}
                >
                  CONTACT INFO
                </h2>
                <div className="flex items-center space-x-2 my-2">
                  <img src={locationFooter} alt="" className="h-6 md:h-8" />
                  <span>
                    <label>Location</label>
                  </span>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <img src={phone} alt="" className="h-6 md:h-8" />
                  <span>
                    <label style={{ fontFamily: "Rubik" }}>
                      0721633782/0717539365
                    </label>
                  </span>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <img src={email} alt="" className="h-6 md:h-8" />
                  <span>
                    <label style={{ fontFamily: "Rubik" }}>
                      littlelionsjunior@gmail.com
                    </label>
                  </span>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <img src={workingHours} alt="" className="h-6 md:h-8" />
                  <span>
                    <label style={{ fontFamily: "Rubik" }}>
                      8:00 am - 4:00 pm
                    </label>
                  </span>
                </div>
              </div>
              {/* Quick Links */}
              <div className="flex flex-col md:w-1/3">
                <h2
                  className="text-lg md:text-2xl font-normal mb-2"
                  style={{ fontFamily: "Rubik" }}
                >
                  QUICK LINKS
                </h2>
                <ul>
                  <li className="py-2" style={{ fontFamily: "Rubik" }}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="py-2" style={{ fontFamily: "Rubik" }}>
                    <Link to="/paypal">Donate</Link>
                  </li>
                  <li className="py-2" style={{ fontFamily: "Rubik" }}>
                    <Link to="/programs">Programs</Link>
                  </li>
                  <li className="py-2" style={{ fontFamily: "Rubik" }}>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );

} 

export default ParentLayout;