import React from 'react'
import Header from '../../Utilities/Header/header';
import './login-Styles/login.css';

export default function Login() {
  return (
    <>
    <div className="Container">
        <Header/>
        <div className="login-page">
            <div className="old-login">
               <div className="login-subhead"><h3>Sign Up</h3></div>
                <div className="login-inputs">
                    <div className="input-items">
                        <label for="text"><i className="far fa-user"></i></label>
                        <input type="name" placeholder="Name"/>
                    </div>
                    <div className="input-items">
                        <label for="text"><i className="far fa-envelope"></i></label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input-items">
                        <label for="text"><i className="fas fa-lock"></i></label>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-items-1">
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label for="vehicle3"> I Agree to all terms and Conditions</label><br></br>
                    </div>
                    <div className="input-items submit"><button>Submit</button></div>
                    <div className="input-items-1">
                        <span>Already have an account <a href="./signup.html">Log in</a></span>
                    </div>
               </div>
            </div>
            {/* <!-- <div className="new-login">
                new login
            </div> --> */}
        </div>
    </div>
    </>
  )
}
