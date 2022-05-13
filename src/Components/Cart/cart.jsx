import React, { useContext, useEffect, useState } from "react";
import "./Styles/cart.css";
import Header from "../../Utilities/Header/header";
import CardHorizon from "../../Utilities/Card-horizon/cardHorizon";
import { GlobalContext } from "../../Context/GlobalState";

export default function Cart() {
  const { cartlist, products } = useContext(GlobalContext);
  const [cartItem, setCartItem] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cartlist.map((item) =>
      setCartItem(
        (ite) =>
          ite +
          parseInt(
            products.filter((product) => product.id === item.id)[0].price
          )
      )
    );
  }, [cartlist]);

  useEffect(() => {
    setTotal((tot) => tot + cartItem);
  }, [cartItem]);

  return (
    <>
      <div className="COntainer">
        <Header />

        <div className="cart-container">
          <div className="cart-content">
            <div className="cart-address">
              <div className="address-details">
                <div className="deliver-to">Deliver to</div>
                <div className="act-add">
                  Hrishikesh Mahalle, Pusad, Maharashtra-445204,IN
                </div>
              </div>
              <div className="address-buttons">
                <button>Edit</button>
              </div>
            </div>
            <div className="cart-items">
              <div className="cart-item">
                {cartlist &&
                  cartlist.map((item, key) => {
                    return (
                      <CardHorizon
                        key={key}
                        quant={item.quant}
                        product={
                          products.filter(
                            (product) => product.id === item.id
                          )[0]
                        }
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="cart-checkout">
            <div className="cart-subhead">Coupons/Gift Card</div>
            <div className="coupons-sec">
              <input type="text" name="" placeholder="COUPONS" />
              <div className="coupon-btn">Apply Now</div>
            </div>
            <div className="cart-subhead">Purchase Details</div>
            <div className="cart-cost">
              <div className="cost-item">
                <div className="cost-title">Total Purchase</div>
                <div className="cost-rate">${total}</div>
              </div>
              <div className="cost-item">
                <div className="cost-title">Coupon Discount</div>
                <div className="cost-rate">$0</div>
              </div>
              <div className="cost-item">
                <div className="cost-title">Delivery Charge</div>
                <div className="cost-rate">$0</div>
              </div>
              <div className="cost-item">
                <div className="cost-title">Grand Total</div>

                <div className="cost-rate">${total}</div>
              </div>

              <div className="cost-item-btn">Place order</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
