
import Home from './Components/Home/Home';
import Login from './Components/Login/login';
import Cart from './Components/Cart/cart';
import Wishlist from './Components/Wishlist/wishlist';
import Merch from './Components/Product-Page/merch';
import Games from './Components/Product-Page/games';
import Hardware from './Components/Product-Page/hardware';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { makeServer } from './server';


makeServer()



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="" element={<Home/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Cart" element={<Cart />}/>
            <Route path="Wishlist" element={<Wishlist/>}/>
            <Route path="Merch" element={<Merch/>}/>
            <Route path="Games" element={<Games/>}/>
            <Route path="Products" element={<Hardware/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
