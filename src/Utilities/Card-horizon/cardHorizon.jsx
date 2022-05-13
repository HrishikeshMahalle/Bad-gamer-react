import React, { useContext } from "react";
import "./cardHorizon.css";
import { GlobalContext } from "../../Context/GlobalState";

export default function CardHorizon({
  product: { id, title, imageSrc, price, rating },
  quant,
}) {
  /*  const { removeItem, addItem, amtOfItem } = useData(); */

  const { remItemCart, incrementItem, decrementItem, addToWishlist } =
    useContext(GlobalContext);

  function iconHandler() {
    addToWishlist(id);
    remItemCart(id);
    console.log("andewala burger");
  }
  return (
    <>
      {" "}
      <div className="card-item vertical">
        <div className="card-info">
          <div className="card-image">
            <img src={imageSrc} alt="ProductImage" />
          </div>
          <div className="card-infoText">
            <div className="card-author">
              <h3 style={{ textDecoration: "bold" }}>{title}</h3>
            </div>
            <div className="card-buttons">
              <div
                className="btn btn-read"
                onClick={(e) => incrementItem({ id, quant })}
              >
                <i className="fas fa-plus"></i>
              </div>
              <div
                className="btn btn-read"
                style={{ color: "yellow", fontSize: "1.3rem" }}
              >
                {quant}
              </div>
              <div
                className="btn btn-bookmark"
                onClick={(e) => decrementItem({ id, quant })}
              >
                <i className="fas fa-minus"></i>
              </div>
            </div>
            <div className="card-buttons">
              <div className="btn icon" onClick={(e) => iconHandler()}>
                <i className="fas fa-heart"></i>
              </div>
              <div className="btn icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="btn icon" onClick={(e) => remItemCart(id)}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
