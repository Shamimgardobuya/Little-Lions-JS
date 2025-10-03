import React, { useEffect, useRef, useState } from "react";

const PAYPAL_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const donationAmounts = [20, 50, 100, 500, 1000, 10];
const paymentItems = [
  "Food",
  "Fee",
  "Class rooms",
  "School trip",
  "School van",
  "Uniform",
];

function loadPayPalScript(clientId) {
  return new Promise((resolve) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&components=buttons&enable-funding=venmo,paylater,card`;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

const PaypalScreen = () => {
  const [amount, setAmount] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    if (!amount || !selectedItem) return;

    loadPayPalScript(PAYPAL_CLIENT_ID).then(() => {
      if (paypalRef.current) {
        paypalRef.current.innerHTML = ""; // Cleanup existing buttons
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              layout: "vertical",
              color: "blue",
              label: "",
            },
            createOrder: async () => {
              const response = await fetch(
                `${process.env?.REACT_APP_API_URL}/api/handle-payment`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ amount, item: selectedItem }),
                  credentials: "include",
                }
              );
              const order = await response.json();
              return order.id;
            },
            onApprove: async (data) => {
              const response = await fetch(
                `${process.env?.REACT_APP_API_URL}/api/payment-success`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    order_id: data.orderID,
                    item: selectedItem,
                  }),
                  credentials: "include",
                }
              );
              const details = await response.json();
              if (details.status === "INSTRUMENT_DECLINED") {
                alert("Payment failed!");
              } else {
                window.location.replace("/success");
              }
            },
            onCancel: () => {
              window.location.replace("/cancel");
            },
          })
          .render(paypalRef.current);
      }
    });
  }, [amount, selectedItem]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-8 px-4">
      {/* Left: PayPal card */}
      <div className="w-full md:max-w-sm rounded overflow-hidden shadow-lg">
        <div className="bg-blue-400 px-4 py-8 text-lg font-semibold text-white-800">
          <h3 className="text-xl font-bold text-white text-center">
            Your Gift goes Twice as far
          </h3>
        </div>

        {/* Custom Amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter custom amount"
          className="border border-gray-300 p-2 m-2 w-[80%] mx-auto outline-none block"
        />

        {/* Donation Amounts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center bg-white p-2">
          {donationAmounts.map((amt) => (
            <button
              key={amt}
              className="bg-gray-200 hover:bg-orange-400 text-black font-bold py-2 px-4 rounded m-2 w-full"
              onClick={() => setAmount(amt)}
            >
              ${amt}
            </button>
          ))}
        </div>

        {/* Payment Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center bg-white p-2">
          {paymentItems.map((item, idx) => (
            <button
              key={item}
              className={`bg-gray-200 hover:bg-orange-400 text-black font-bold py-2 px-4 rounded-full m-2 w-full ${
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

        {/* PayPal Button */}
        <div ref={paypalRef} id="paypal-button-container" className="p-4" />
      </div>

      {/* Right: Info card */}
      <div className="w-full md:max-w-xs bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-red-500 mb-2">Important</h3>
        <p className="text-gray-700">
          Please select a <span className="font-semibold">payment item</span>{" "}
          in order to proceed with your donation.
        </p>
      </div>
    </div>
  );
};

export default PaypalScreen;
