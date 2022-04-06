import React, { useContext } from 'react'
import './card.css'
import { GlobalContext } from '../../Context/GlobalState'
import { useLocation } from 'react-router-dom'

export default function Card({product:{id,title,imageSrc,price,rating}}) {

    const {addToWishlist, addToCartlist, remItemWish} = useContext(GlobalContext)

const location = useLocation().pathname

function iconHandler(){
    if(location === "/Wishlist"){
        remItemWish(id)
    }else{
        addToWishlist(id)
    }
}
  return (
    <>
    <div className="card-item horizontal">
                  <div className="card-info">
                      <div className="card-image">
                          <img src={imageSrc} alt={title}/>
                      </div>
                      <div className="card-infoText">
                          <div className="card-author">
                              <h4>{title}</h4>   
                          </div>
                          <div className="card-content">
                             <span>${price}</span> <a href="./Screens/Product-page/merch.html"> <div className="button btn-mid">Buy Now</div></a>
                          </div>
                      </div>
                  </div>
                  <div className="card-buttons">
                      <div className="btn btn-read">
                          <div className="star-rating" onClick={e=>remItemWish(id)}>
                              <i className="fas fa-star starred"></i>
                              {rating}
                            </div>
                      </div>
                      <div className="btn btn-bookmark"><i className="fas fa-shopping-cart" onClick={e=>addToCartlist({id,quant:1})}></i></div>

                      <div className="btn icon"><i className={ location === '/Wishlist' ? 'fas fa-times' : 'fas fa-heart' } onClick={e=>iconHandler()}></i></div>

                  </div>
        </div>
    
    </>
  )
}
