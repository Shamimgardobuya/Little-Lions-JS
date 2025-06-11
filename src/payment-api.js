
paypal.
Buttons({
    style: {
    shape: "rect",
    layout: "vertical",
    color: "blue",
    label: "",
    

},


    createOrder: async function (data, actions ) {
        //get amount input 
        const amount = document.getElementById('donationAmount').value
        // console.log(amount)
        return await fetch("{{ route('make.payment') }}", {
        method: "POST",
        headers: { "Content-Type": "application/json", 
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

        },
        body: JSON.stringify({ amount: amount , item: document.getElementById('item').value })
            })
            .then(response => response.json())
            .then(order => order.id)
            .catch( err=> console.log(err));

    },
    onApprove : async function (data, actions) {
        // console.log(data.orderID)
    return await fetch("{{ route('success.payment') }}", {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

        },
        body : JSON.stringify({ order_id : data.orderID , item: document.getElementById('item').value})
    })
    .then(response=> response.json())
    .then(details => {
        if (details.status === "INSTRUMENT_DECLINED") {
            alert("Payment failed!");


            } else {
                window.location.replace("{{ route('success') }}");
            }
    })


    },
    onCancel : function (data) {
        window.location.replace("{{ route('cancel') }}");
    }


}).render("#paypal-button-container")
.then(() => console.log("PayPal button rendered successfully!"))
.catch((err) => console.error("PayPal button failed to render:", err));
