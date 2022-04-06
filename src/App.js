
import Home from './Components/Home/Home';
import Hardware from './Components/Product-Page/hardware';
import Wishlist from './Components/Wishlist/wishlist';

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
        </Routes>
    </BrowserRouter>
  );
}

export default App;
