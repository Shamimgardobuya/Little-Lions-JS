import logo from './logo.svg';
import './App.css';
import './index.css'
import { PaymentForm } from './PaymentForm';
import HomeScreen from './HomeScreen';

import PaypalScreen from './PaypalScreen';
import Gallery from './Gallery';
import ContactScreen from './ContactScreen';
import Programs from './Programs';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/home' element={<HomeScreen />}></Route>
      <Route path='/paypal' element={<PaypalScreen />}></Route>
      <Route path='/contact' element={<ContactScreen />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/programs' element={<Programs />}></Route>


      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
