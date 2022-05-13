import React, { createContext, useState, useReducer } from "react";
import AppReducer from "./AppReducer";
import { products } from "../backend/db/products";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [productss, setProducts] = useState([]);

  // const [hardware,setHardware] = useState([...productss.filter(product => product.categoryName === "Hardware")])

  const initialWishlist = {
    wishlist: [],
    cartlist: [],
    products,
    price: 0,
  };
  const [state, dispatch] = useReducer(AppReducer, initialWishlist);

  function addToWishlist(id) {
    if (!state.wishlist.includes(id)) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: id,
      });
    }
  }

  function addToCartlist(pdt) {
    if (!state.cartlist.includes(pdt.id)) {
      dispatch({
        type: "ADD_TO_CARTLIST",
        payload: pdt,
      });
    }
  }

  function incrementItem(pdt) {
    console.log("called", pdt);
    const updateCart = state.cartlist.map((item) => {
      return item.id === pdt.id ? { ...item, quant: item.quant + 1 } : item;
    });
    console.log("update", updateCart);
    dispatch({
      type: "INCRE",
      payload: updateCart,
    });
  }
  function decrementItem(pdt) {
    const existingItem = state.cartlist.find((item) => item.id === pdt.id);
    if (existingItem.quant === 1) return;

    const updateCart = state.cartlist.map((item) => {
      return item.id === pdt.id ? { ...item, quant: item.quant - 1 } : item;
    });
    console.log("update", updateCart);
    dispatch({
      type: "DECRE",
      payload: updateCart,
    });
  }

  // function updatePrice(pdt){

  //     let price = 0,
  //     pdt.forEach()

  //     dispatch({
  //         type:"TOT_AMT",
  //         payload:price
  //     })
  // }

  function remItemCart(id) {
    const updatedCart = state.cartlist.filter((item) => item.id !== id);
    dispatch({
      type: "REM_ITEM_CART",
      payload: updatedCart,
    });
  }
  function remItemWish(id) {
    const updatedWish = state.wishlist.filter((item) => item !== id);
    dispatch({
      type: "REM_ITEM_WISH",
      payload: updatedWish,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        products,
        productss,
        setProducts,
        addToWishlist,
        addToCartlist,
        wishlist: state.wishlist,
        cartlist: state.cartlist,
        incrementItem,
        decrementItem,
        remItemCart,
        remItemWish,
      }}
    >
      {children}
      {console.log("global")}
    </GlobalContext.Provider>
  );
};
