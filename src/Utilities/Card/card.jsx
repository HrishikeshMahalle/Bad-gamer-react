import React, { useContext, useState } from "react";
import "./card.css";
import { GlobalContext } from "../../Context/GlobalState";
import { Link, useLocation } from "react-router-dom";

export default function Card({
  product: { id, title, imageSrc, price, rating },
}) {
  const { addToWishlist, addToCartlist, remItemWish, remItemCart } =
    useContext(GlobalContext);

  const location = useLocation().pathname;
  const [addedCart, setAddedCart] = useState(false);
  const [addedWish, setAddedWish] = useState(false);

  function activeAdderCart() {
    if (!addedCart) {
      setAddedCart(true);
      addToCartlist({ id, quant: 1 });
    } else {
      setAddedCart(false);
      remItemCart(id);
    }
  }

  function iconHandler() {
    if (location === "/Wishlist") {
      setAddedWish(false);
      remItemWish(id);
    } else {
      setAddedWish(true);
      addToWishlist(id);
    }
  }
  return (
    <>
      <div className="card-item horizontal">
        <div className="card-info">
          <div className="card-image">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="card-infoText">
            <div className="card-author">
              <h4>{title}</h4>
            </div>
            <div className="card-content">
              <span>${price}</span>{" "}
              <Link to="/Products">
                <div className="button btn-mid">Buy Now</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-buttons">
          <div className="btn btn-read">
            <div className="star-rating">
              <i className="fas fa-star starred"></i>
              {rating}
            </div>
          </div>
          <div className="btn btn-bookmark">
            <i
              className={
                !addedCart ? "fas fa-shopping-cart" : "fa fa-minus-circle"
              }
              onClick={(e) => activeAdderCart()}
            ></i>
          </div>

          <div className="btn icon">
            <i
              className={
                location === "/Wishlist"
                  ? "fas fa-times"
                  : addedWish
                  ? "fa fa-heart"
                  : "fa fa-heart-o"
              }
              onClick={(e) => iconHandler()}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
