// import React, { useContext,useState } from 'react'
// import Card from '../../Utilities/Card/card'
// import Header from '../../Utilities/Header/header'
// import './Styles/merch.css'
// import { GlobalContext } from '../../Context/GlobalState'

// export default function Merch() {
//     const {products} = useContext(GlobalContext)
//     const [prods, setProds] = useState([])
//     const [merch,setMerch] = useState([...products.filter(product => product.categoryName === "Merch")])

//     const [Asc, setAsc] = useState(true)




//   return (


//     <><div className="container">
//        <Header/>
//         <div className="merch-page">
//             <div className="merch-sidebar">
//                 <div className="sidebar-head">
//                     <span>Filters</span> 
//                     <div className="sidebar-head-btn">
//                         ClearAll
//                     </div>
//                 </div>
//                 <div className="sidebar-divide"></div>
//                 <div className="sidebar-items">
//                     <div className="sidebar-subhead">SORT</div>
//                     <div className="sidebar-content">
//                         <div className="sidebar-cont-item">
//                             <input type="radio" name="sort" onChange={e=>setAsc(true)}/>
//                             <label className="slider-head">Low to High</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="radio" name="sort" onChange={e=>setAsc(false)}/>
//                             <label for="sort">High to Low</label>
//                         </div>
//                     </div>

//                     <div className="sidebar-divide"></div>

//                     <div className="sidebar-subhead">Categories</div>
//                     <div className="sidebar-content">
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Action</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Unique</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Hoodies</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Jackets</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Shorts</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Accesserios</label>
//                         </div>
//                     </div>

//                     <div className="sidebar-divide"></div>

//                     <div className="sidebar-subhead">Other</div>
//                     <div className="sidebar-content">
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="sort" id=""/>
//                             <label for="sort">Out of Stock</label>
//                         </div>
//                     </div>
//                     <div className="sidebar-divide"></div>
//                     <div className="sidebar-content">
//                         <div className="sidebar-cont-item-1">
//                             <label className="sidebar-subhead slider">Sort the size</label>
//                             <div className="slidecontainer">
//                                 <input type="range" step="2" min="28" max="46" value="34" className="slider" id="myRange"/>
//                                 <p id="demo">34</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="merch-content">
//                 <div className="content-head"><h3> Merch</h3></div>
//                 <div className="merch-cards">
//                     {products && products.map((product)=>
//                         product.categoryName === "Merch" ? <Card product={product} key={product.id} /> : null
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div></>
//   )
// }
