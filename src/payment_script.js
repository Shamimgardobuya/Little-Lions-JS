function paypal () {
    return (
        <div>
            <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
            <script>paypal.Buttons().render('#paypal-button-container');</script>
        </div>
    )
}

