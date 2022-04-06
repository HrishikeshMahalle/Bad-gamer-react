
import Home from './Components/Home/Home';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { makeServer } from './server';


makeServer()



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
