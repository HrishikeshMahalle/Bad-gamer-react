import React from 'react'
import './Styles/login.css'

export default function Signup() {
  return (
    <> <div className="Container">
        <div className="header">
            <div className="header-nav-items">
                <div className="nav-item"><a href="">Games</a></div>
                <div className="nav-item"><a href="">Hardware</a></div>
                <div className="nav-item"><a href="../Product-page/merch.html">Merch</a></div>
                <div className="nav-item"><a href="">Support</a></div>
            </div>
            <div className="header-title"> <span>悪い Gamers</span></div>
            <div className="header-icons">
                <div className="icon-items"><a href="/index.html">Home</a></div>
                <div className="icon-items"><a href="../Wishlist/wishlist.html"><i className="far fa-heart"></i></a></div>
                <div className="icon-items"><a href="../Cart/cart.html"><i className="fas fa-shopping-cart"></i></a></div>
            </div>
        </div>
        <div className="login-page">
            <div className="old-login">
               <div className="login-subhead"><h3>Login</h3></div>
                <div className="login-inputs">
                    <div className="input-items">
                        <label for="text"><i className="far fa-envelope"></i></label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input-items">
                        <label for="text"><i className="fas fa-lock"></i></label>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-items submit"><button>Submit</button></div>
                    <div className="input-items-1">
                        <span>Don't have an account <a href="./login.html">Sign-up</a></span>
                    </div>
               </div>
            </div>
            {/* <!-- <div className="new-login">
                new login
            </div> --> */}
        </div>
    </div></>
  )
}
