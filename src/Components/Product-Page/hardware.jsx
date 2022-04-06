import React from 'react'
import Card from '../../Utilities/Card/card'
import Header from '../../Utilities/Header/header'
import './Styles/merch.css'


import { useData } from '../../Context/dataContext'


export default function Hardware() {
//     const {products,hardware,setHardware}  = useContext(GlobalContext)
//     const [prods,setProds] = useState([])
//    console.log(hardware)
   

//     
//     const [monitor,setMonitor] = useState(true)
//     const [mouse,setMouse] = useState(true)
//     const [motherboard,setMotherboard] = useState(true)
//     const [accessory,setAccessory] = useState(true)

//     useEffect(()=>{
//         setProds(products.filter(product => product.categoryName === "Hardware"))
//     },[products])


//     useEffect(()=>{
    //         setHardware(prods.filter(hardware => (monitor && hardware.subCategroy.includes("monitor")) || (mouse && hardware.subCategroy.includes("mouse")) || (motherboard && hardware.subCategroy.includes("motherboard")) || (accessory && hardware.subCategroy.includes("accessory"))))
    //     },[monitor,mouse,accessory,motherboard])
    
    
    
    const {product,category,checkboxHandler,sortDataUp,sortDataDown} = useData()
    

// const [hardware,setHardware] = useState([...product.filter(product => product.categoryName === "Hardware")])

  const filterData = (hardware, categories) => {
        const checkedCategories = Object.entries(categories).filter(cat => cat[1] === true).map(cat => cat[0])
        const filteredProducts = hardware.filter(product => checkedCategories.includes(product.categoryName))
        // console.log(filteredProducts);
        return filteredProducts.length > 0 ? filteredProducts : hardware
  }
  const filteredData = filterData(product, category)




  return (
    <><div className="container">
    <Header/>
     <div className="merch-page">
    
 <div className="merch-sidebar">
    <div className="sidebar-head">
                 <span>Filters</span> 
                 <div className="sidebar-head-btn">
                     ClearAll
                 </div>
             </div>
             <div className="sidebar-divide"></div>
 {
            Object.entries(category).map(([key, val]) => {
              return (
                <div key={key}>
                    <div className="sidebar-content">
                        <div className="sidebar-cont-item">
                            <input
                                type="checkbox"
                                checked={val}
                                onChange={(e) => checkboxHandler(key, e)}
                            />
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>    
                        </div>
                    </div>
                </div>
              )
              
            })
          }
                 <div className="sidebar-subhead">SORT</div>
                 <div className="sidebar-content">
                     <div className="sidebar-cont-item">
                         <input type="radio" name="sort" id="" onChange={e=>sortDataUp()}/>
                         <label className="slider-head">Low to High</label>
                     </div>
                     <div className="sidebar-cont-item">
                         <input type="radio" name="sort" id="" onChange={e=>sortDataDown()} />
                         <label>High to Low</label>
                     </div>
                 </div>
 </div>
            {/* <div className="sidebar-head">
                 <span>Filters</span> 
                 <div className="sidebar-head-btn">
                     ClearAll
                 </div>
             </div>
             <div className="sidebar-divide"></div>
             <div className="sidebar-items">

                 <div className="sidebar-divide"></div>

                 <div className="sidebar-subhead">Categories</div>
                 <div className="sidebar-content">
                     <div className="sidebar-cont-item">
                         <input type="checkbox" name="accessory" checked={accessory} onChange={e=>setAccessory(!accessory)}/>
                         <label for="accessory">Accessory</label>
                     </div>
                     <div className="sidebar-cont-item">
                         <input type="checkbox" name="motherboard" checked={motherboard} onChange={e=>setMotherboard(!motherboard)}/>
                         <label for="motherboard">Motherboard</label>
                     </div>
                     <div className="sidebar-cont-item">
                         <input type="checkbox" name="monitor" checked={monitor} onChange={e=>setMonitor(!monitor)}/>
                         <label for="monitor">Monitor</label>
                     </div>
                     <div className="sidebar-cont-item">
                         <input type="checkbox" name="mouse" checked={mouse} onChange={e=>setMouse(!mouse)}/>
                         <label for="mouse">Mouse</label>
                     </div>
                 </div>

                 <div className="sidebar-divide"></div>

                 <div className="sidebar-subhead">Other</div>
                 <div className="sidebar-content">
                     <div className="sidebar-cont-item">
                         <input type="checkbox" name="sort" id=""/>
                         <label for="sort">Out of Stock</label>
                     </div>
                 </div>
                 <div className="sidebar-divide"></div>
                 <div className="sidebar-content">
                     <div className="sidebar-cont-item-1">
                         <label className="sidebar-subhead slider">Sort the size</label>
                         <div className="slidecontainer">
                             <input type="range" step="2" min="28" max="46" value="34" className="slider" id="myRange"/>
                             <p id="demo">34</p>
                         </div>
                     </div>
                 </div>
             </div>
</div> */}
         <div className="merch-content">
             <div className="content-head"><h3>All Products</h3></div>
             <div className="merch-cards">
             {filteredData && filteredData.map((product)=>
                        <Card product={product} key={product.id} />
                    )}
             </div>
         </div>
     </div>
 </div></>
  )
}
