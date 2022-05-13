import React, { useContext } from "react";
import Card from "../../Utilities/Card/card";
import Header from "../../Utilities/Header/header";
import "./Styles/wishlist.css";
import { GlobalContext } from "../../Context/GlobalState";

export default function Wishlist() {
  const { wishlist, products } = useContext(GlobalContext);
  return (
    <>
      <div className="CONTainer">
        <Header />
        <div className="wishlist-items">
          <div className="merch-content">
            <div className="content-head">
              <h3>
                Wishlist <i className="far fa-heart"></i>
              </h3>
            </div>
            <div className="merch-cards">
              {wishlist &&
                wishlist.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      product={
                        products.filter((product) => product.id === item)[0]
                      }
                    />
                  );
                  {
                    console.log(
                      "Frm wishlist",
                      products.filter((product) => product.id === item)[0]
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
