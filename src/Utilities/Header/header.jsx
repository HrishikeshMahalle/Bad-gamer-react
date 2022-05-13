import React, { useContext, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

export default function Header() {
  const { wishlist,cartlist } = useContext(GlobalContext);
  return (
    <>
      <div className="header">
        <div className="header-nav-items">
          <div className="nav-item">
            <Link to="/Products">Products</Link>
          </div>
          <div className="nav-item">
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="header-title">
          {" "}
          <Link style={{ all: "unset" }} to="/">
            <span>悪い Gamers</span>{" "}
          </Link>
        </div>
        <div className="header-icons">
          <div className="icon-items">
            <Link to="/Login"> Login/Signup </Link>
          </div>
          <div className="icon-items">
            <Link to="/Wishlist">
              <i className="far fa-heart"></i>
            </Link>
            <span
              className="numbers"
              style={{
                color: "red",
                fontSize: "0.8rem",
                backgroundColor: "black",
                position: "absolute",
                top: "0.1rem",
                right: "4.2rem",
                height: "50%",
                width: "5%",
                textAlign: "center",
                borderRadius: "50%",
                fontWeight: "800",
              }}
            >
              {wishlist.length}
            </span>
          </div>
          <div className="icon-items">
            <Link to="/Cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <span
              className="numbers"
              style={{
                color: "red",
                fontSize: "0.8rem",
                backgroundColor: "black",
                position: "absolute",
                top: "0.1rem",
                right: "1rem",
                height: "50%",
                width: "5%",
                textAlign: "center",
                borderRadius: "50%",
                fontWeight: "800",
              }}
            >
              {cartlist.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
