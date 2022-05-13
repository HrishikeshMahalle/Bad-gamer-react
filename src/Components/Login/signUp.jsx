import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Utilities/Header/header";
import "./login-Styles/login.css";

export default function Signup() {
  return (
    <>
      {" "}
      <div className="Container">
        <Header />
        <div className="login-page">
          <div className="old-login">
            <div className="login-subhead">
              <h3>Login</h3>
            </div>
            <div className="login-inputs">
              <div className="input-items">
                <label>
                  <i className="far fa-envelope"></i>
                </label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-items">
                <label>
                  <i className="fas fa-lock"></i>
                </label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-items submit">
                <button>Submit</button>
              </div>
              <div className="input-items-1">
                <span>
                  Don't have an account <Link to="/Login">Sign-up</Link>
                </span>
              </div>
            </div>
          </div>
          {/* <!-- <div className="new-login">
                new login
            </div> --> */}
        </div>
      </div>
    </>
  );
}
