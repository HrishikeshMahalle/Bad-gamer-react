import React, {useState} from 'react'
import '../Styles/main.css';
import {Link} from 'react-router-dom'

export default function Main() {
const [ back, setBack ] = useState('dying-light-2.jfif');
const [ title, setTitle] = useState('Dyling Lights');


  const clickHandler = e => {
    setBack(e.target.name);
    setTitle(e.target.alt);
  }
  return (
    <>
        <div className="head-container">
          <img src={`/Assets/${back}`} alt=""/>
        
            <div className="header">
                <div className="header-nav-items">
                    {/* <div className="nav-item"><Link to={"/Games"}>Games</Link></div> */}
                    <div className="nav-item"><Link to="/Products">Products</Link></div>
                    {/* <div className="nav-item"><Link to="/Merch">Merch</Link></div> */}
                    <div className="nav-item"><a href="">Support</a></div>
                </div>
                <div className="header-title"> <Link style={{all:"unset"}} to="/"><span>悪い Gamers</span> </Link></div>
                <div className="header-icons">
                <div className="icon-items"><Link to="/Login"> Login </Link></div>
                    <div className="icon-items"><Link to="/Wishlist"><i className="far fa-heart"></i></Link></div>
                    <div className="icon-items"><Link to="/Cart"><i className="fas fa-shopping-cart"></i></Link></div>
                        <div className="icon-items"><a href="./Screens/Login/login.html"><i className="fas fa-search"></i></a></div>
                </div>
            </div>
            <div className="bg-text-overlay">
                <div className="bg-info game1">
                    <div className="bg-info-header">
                        <h1>{title}</h1>
                    </div>
                    <div className="bg-info-content">
                        <h3>Try or Die</h3>
                    </div>
                    <div className="bg-info-price">
                        <div className="price">10$</div>
                        <div className="buy-btn">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head-cards">
                <div className="head-card-item ">
                    <span>Dying light 2</span>
                    <img 
                      name="dying-light-2.jfif" 
                      src="/Assets/dying-light-2.jfif" 
                      alt="Dyling Lights"  
                      onClick={clickHandler} />
                </div>
                <div className="head-card-item active">
                    <span>Ghostwire</span>
                    <img 
                      name="ghostwire-tokyo.jfif" 
                      src="/Assets/ghostwire-tokyo.jfif" 
                      alt="GhostWire" 
                      onClick={clickHandler} />
                </div>
                <div className="head-card-item">
                    <span>God of War - Ragnarok</span>
                    <img
                     name="god-of-war-ragnarok.jfif"
                     src="/Assets/god-of-war-ragnarok.jfif"
                     alt="God Of War Ragnarok" 
                     onClick={clickHandler}/>
                </div>
                <div className="head-card-item">
                    <span>Horizon Forbidden</span>
                    <img
                      price="Horizon Forbidden" 
                      name="horizon-forbidden.jfif"
                      src="/Assets/horizon-forbidden.jfif" 
                      alt="Horizon Forbidden" 
                      onClick={clickHandler}/>
                </div>
                <div className="head-card-item">
                    <span>Uncharted Legacy</span>
                    <img  
                      name="uncharted-legacy.jfif" 
                      src="/Assets/uncharted-legacy.jfif" 
                      alt="Uncharted Legacy" 
                      onClick={clickHandler}/>
                </div>
            </div>
        </div>
    </>
  )
}
