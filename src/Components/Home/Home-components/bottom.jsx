import React, { useContext } from 'react'
import '../Styles/bottom.css'
import Card from '../../../Utilities/Card/card'
import { GlobalContext } from '../../../Context/GlobalState'

export default function Bottom() {
  const {products} = useContext(GlobalContext)
  return (
    <>
      <div className="bottom-container">
        <div className="bot-header">
            <h1>Awesome Merch</h1>
        </div>
        <div className="bot-cards">
          {products && products.map((product)=>
              product.categoryName == ("causal"&&"party"||"sports") ?
                  <Card product={product} key={product.key}/>
              :""
              )}
        </div>
        <div className="footer">
            <span>A HrishiX Gen Works &copy;. All Rights Reserved.</span>
        </div>
      </div>
    </>
  )
}
