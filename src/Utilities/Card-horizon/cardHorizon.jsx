import React,{useContext, useState} from 'react'
import './cardHorizon.css'
import { useData } from '../../Context/dataContext'
import { GlobalContext } from '../../Context/GlobalState'
import { useLocation } from 'react-router-dom'

export default function CardHorizon({product:{id,title,imageSrc,price,rating},quant}) {

const {removeItem,addItem,amtOfItem} = useData()

const {remItemCart,incrementItem,decrementItem} = useContext(GlobalContext)

const location = useLocation()

console.log("ocation",location)



    // const [amt,setAmt] = useState(1)

    // function inputHandler(icon){
    //     if(icon === "+" && amt > 0){
    //         setAmt(amt => amt + 1)
    //     }
    //     if(icon === "-" && amt > 1){
    //         setAmt(amt => amt - 1)
    //     }

    // }
  return (
    <> <div class="card-item vertical">
                        <div class="card-info">
                            <div class="card-image">
                                <img src={imageSrc} alt="image"/>
                            </div>
                            <div class="card-infoText">
                                <div class="card-author">
                                    <h3 style={{textDecoration:"bold"}}>{title}</h3>   
                                </div>
                                <div class="card-buttons">
                                    <div class="btn btn-read" onClick={e=>incrementItem({id,quant})}><i class="fas fa-plus"></i></div>
                                    <div class="btn btn-read" style={{color:"yellow",fontSize:"1.3rem"}}>{quant}</div>
                                    <div class="btn btn-bookmark" onClick={e=>decrementItem({id,quant})}><i class="fas fa-minus"></i></div>
                                </div>
                                <div className="card-buttons">
                                    <div class="btn icon"><a href=""><i class="fas fa-heart"></i></a></div>
                                    <div class="btn icon"><a href=""><i class="fas fa-share-alt"></i></a></div>
                                    <div class="btn icon" onClick={e=>remItemCart(id)}><i class="fas fa-times"></i></div>
                                </div>
                            </div>
                        </div>
                       
                    </div></>
  )
}
