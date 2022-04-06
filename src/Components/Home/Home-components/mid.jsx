import React, { useContext } from 'react'
import Card from '../../../Utilities/Card/card'
import '../Styles/mid.css'
import { GlobalContext } from '../../../Context/GlobalState'
export default function Mid() {
  const {products} = useContext(GlobalContext)
  return (
    <>
    <div className="mid-container">
          <div className="mid-header">
              <h1>Games</h1>
          </div>
          <div className="pdt-cards">
              {products && products.map((product)=>

              product.categoryName === "games"   ? <Card product={product} key={product.key}/> : ""
              
              )}
          </div>
        </div></>
  )
}
