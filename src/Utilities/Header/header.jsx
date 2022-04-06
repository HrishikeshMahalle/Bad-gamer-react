import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
        <div className="header">
                <div className="header-nav-items">
                  {/* <div className="nav-item"><Link to={"/Games"}>Games</Link></div> */}
                    <div className="nav-item"><Link to="/Products">Products</Link></div>
                    {/* <div className="nav-item"><Link to="/Merch">Merch</Link></div> */}
                    <div className="nav-item"><a href="">Support</a></div>
                </div>
                <div className="header-title"> <Link style={{all:"unset"}} to="/"><span>悪い Gamers</span> </Link></div>
                <div className="header-icons">
                    <div className="icon-items"><Link to="/Login"> Login/Signup </Link></div>
                    <div className="icon-items"><Link to="/Wishlist"><i className="far fa-heart"></i></Link></div>
                    <div className="icon-items"><Link to="/Cart"><i className="fas fa-shopping-cart"></i></Link></div>
                </div>
        </div>
    </>
  )
}
