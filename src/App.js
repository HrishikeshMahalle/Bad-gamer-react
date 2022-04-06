
import Home from './Components/Home/Home';
import Hardware from './Components/Product-Page/hardware';
import Wishlist from './Components/Wishlist/wishlist';
import Login from './Components/Login/login';
import Cart from './Components/Cart/cart';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { makeServer } from './server';


makeServer()



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="Wishlist" element={<Wishlist/>}/>
            <Route path="Products" element={<Hardware/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Cart" element={<Cart />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
