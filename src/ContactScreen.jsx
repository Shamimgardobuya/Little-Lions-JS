import React, { useState, useEffect } from "react";
import ParentLayout from "./ParentLayout";
import axios from "axios";
import { TileLayer, Marker } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import 'leaflet/dist/leaflet.css';
import { toast } from "react-toastify";
import LocationMarker from "./assets/locationFooter.png";
import L from "leaflet";

const ContactScreen = () => {
    
    const center = [-1.3143716,36.7807485]; // Example coordinates
    console.log(center)

   
    const showToastMessage = () => {
    toast.success("Message sent !", {
      position: "top-right"
    });
    };
    
  
    const handleSubmit = (event)  => {
        event.preventDefault();
        let formData = new FormData(event.target)
        console.log(formData.get("name"));

            axios.post(
                `${process.env?.REACT_APP_API_URL}/api/send-email`,
                {
                    
                name : formData.get("name"),
                email : formData.get("email"),
                subject : formData.get("subject"),
                message : formData.get("message")

                },
                
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                },
                
            )
            .then(function (response) {
                    console.log(response);
                    showToastMessage()
                    

                })
            .catch(function (error) {
                console.log(error);
            });
                    


    }
    return (
      <div className="min-h-screen bg-white">
        <ParentLayout>
         
          <div className="flex flex-col items-center px-4 py-8 md:py-12">
            <h1
              className="font-semibold text-xl md:text-2xl mb-2 text-center"
              style={{ fontFamily: "Rubik" }}
            >
              Get In touch
            </h1>

            <p
              style={{ fontFamily: "Rubik" }}
              className="text-center mb-6 text-sm md:text-base"
            >
              Reach out to us today and discover how Little Lion Junior School can be a part <br />
              of your child’s journey toward excellence. Let us guide and support them in <br />
              building a bright future filled with endless possibilities and success!
            </p>

            <form
              className="w-full max-w-lg flex flex-col gap-3 items-center"
              onSubmit={handleSubmit}
              style={{ fontFamily: "Rubik" }}
            >
              <div className="flex flex-col md:flex-row w-full gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-1 outline outline-1 outline-green-900 border-none p-2 rounded-none m-1"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="flex-1 outline outline-1 outline-green-900 border-none p-2 rounded-none m-1"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full outline outline-1 outline-green-900 border-none p-2 rounded-none m-1"
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full outline outline-1 outline-green-900 border-none p-2 rounded-none m-1 mb-2 text-justify resize-y min-h-[80px]"
                />
              </div>
              <button
                type="submit"
                className="bg-green-900 text-white w-full md:w-1/2 h-12 rounded-full font-bold text-lg mt-2"
                style={{ fontFamily: "Rubik" }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* map */}
          <div className="text-center text-sm text-gray-500 mb-2">
            ↓ Scroll down to see the map ↓
          </div>
            <div className="flex flex-col items-center px-4 py-8 md:py-12">
            <MapContainer
              center={center}
              zoom={10}
              style={{
                height: "300px",
                width: "100%",
                maxWidth: "700px",
                marginTop: "30px",
              }}
              className="h-72"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={center}
                icon={
                  new L.Icon({
                    iconUrl: LocationMarker,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32],
                  })
                }
              />
            </MapContainer>
          </div>
  </ParentLayout>     
  
  </div>
    );
    
};

export default ContactScreen;