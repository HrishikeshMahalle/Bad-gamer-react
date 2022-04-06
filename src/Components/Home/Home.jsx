import React,{useContext,useEffect} from 'react'
import './Styles/home.css'
import Mid from './Home-components/mid'
import Main from './Home-components/main'
import Bottom from './Home-components/bottom'
import {GlobalContext} from '../../Context/GlobalState';
import axios from 'axios'

function Home() {
  const {setProducts} = useContext(GlobalContext)

  useEffect(()=>{
    (async  () => {
      const data = await axios.get('/api/products');
      
      setProducts([...data.data.products]);
    })()
  }, []);

  return (
    <div className='container'>
      <Main/> 
      <Mid/> 
      <Bottom/> 
    </div>
  )
}

export default Home