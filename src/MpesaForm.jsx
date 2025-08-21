import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


const donationAmounts = [200, 500, 1000, 5000, 10000, 20000];
const paymentItems = [
  "Food",
  "Fee",
  "Class rooms",
  "School trip",
  "School van",
  "Uniform",
];

const MpesaForm = () => {
  const [amount, setAmount] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [phoneNumber,setPhoneNumber] = useState("");

  const sendPayment = async()=> {
    try { 
            if (!process.env.REACT_APP_API_URL) {
                console.log("REACT_APP_API_URL is undefined. Please check your .env file and restart the dev server.");
                return;
            }
            let data = await axios.post(`${process.env.REACT_APP_API_URL}/api/mpesa_payment`, 
                {
                    "phone_number" : phoneNumber,
                    "amount": amount,
                    "item": selectedItem
                },
                {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }
            )

            toast.success("Payment made successfull! Thank you for making Little lions better")
        } catch (error) {  
            toast.error(error.response.data.message);
            
        }


  }
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-4">
      <div className="bg-green-600 px-4 py-4 text-lg font-semibold text-white-800">
        <h3 className="text-lg font-bold text-white text-center">
          Your Gift goes Twice as far
        </h3>
      </div>
      <div className="flex flex-col items-center space-y-2 py-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter custom amount"
          className="border border-gray-300 p-2 w-4/5 outline-none"
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          className="border border-gray-300 p-2 w-4/5 outline-none"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 px-2 bg-white">
        {donationAmounts.map((amt) => (
          <button
            key={amt}
            className="bg-gray-200 hover:bg-orange-400 text-black font-bold py-1 px-2 m-1 text-sm"
            onClick={() => setAmount(amt)}
          >
            {amt} KES
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 px-2 bg-white">
        {paymentItems.map((item, idx) => (
          <button
            key={item}
            className={`bg-gray-200 hover:bg-orange-400 text-black font-bold py-1 px-2 m-1 rounded-full text-xs ${
              selectedItemIndex === idx ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              setSelectedItem(item);
              setSelectedItemIndex(idx);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          onClick={sendPayment}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MpesaForm;
