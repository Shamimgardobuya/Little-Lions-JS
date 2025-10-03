import logo from './logo.svg';
import './App.css';
import './index.css'
// import { PaymentForm } from './PaymentForm';
import HomeScreen from './HomeScreen';
import ParentLayout from './ParentLayout';
import PaypalScreen from './PaypalScreen';
import Gallery from './Gallery';
import ContactScreen from './ContactScreen';
import Programs from './Programs';
import PaymentCancelled from './PaymentCancelled';
import PaymentSuccess from './PaymentSuccess';
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <BrowserRouter>
     <ParentLayout>
     <Routes>
      <Route path='/home' element={<HomeScreen />}></Route>
      <Route path='/paypal' element={<PaypalScreen />}></Route>
      <Route path='/contact' element={<ContactScreen />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/programs' element={<Programs />}></Route>
      <Route path='/cancel' element={<PaymentCancelled />}></Route>
      <Route path='/success' element={<PaymentSuccess />}></Route>

      <Route path='/' element={<HomeScreen />}></Route>



      
     </Routes>
      </ParentLayout>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
