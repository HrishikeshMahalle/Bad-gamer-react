// import React, { useContext, useEffect, useState } from 'react'
// import Card from '../../Utilities/Card/card'
// import Header from '../../Utilities/Header/header'
// import './Styles/merch.css'
// import { GlobalContext } from '../../Context/GlobalState'

// export default function Games() {
//     const { products } = useContext(GlobalContext);
//     const [ prods, setProds ] = useState([]);
//     const [games,setGames] = useState([...products.filter(product => product.categoryName === 'Games')])

//     const [Asc,setAsc] = useState(false)
//     const [action,setAction] = useState(true)
//     const [rpg,setRpg] = useState(true)
//     const [sports,setSports] = useState(true)
//     const [ps,setPs] = useState(true)
//     const [xbox,setXbox] = useState(true)

//     useEffect(() => {
//         setProds(products.filter(product => product.categoryName === 'Games'));
//     }, [products]);
    
//     useEffect(() => {
//         if(!Asc) {
//             setGames(games.sort((a, b) => a.price - b.price))
//         } else {
//             setGames(games.sort((a,b) => b.price - a.price))
//         }
//     }, [Asc]);

//     useEffect(() => {
//         setGames(prods.filter(game => (action && game.subCategroy.includes('action')) || (rpg && game.subCategroy.includes('rpg')) || (sports && game.subCategroy.includes('sports')) || (ps && game.subCategroy.includes('ps')) || (xbox && game.subCategroy.includes('xbox'))));
//         console.log(games)
//     }, [action, rpg, ps, xbox, sports]);

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
//                             <input type="radio" name="sort" id="" onClick={e=>setAsc(true)}/>
//                             <label className="slider-head">Low to High</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="radio" name="sort" id="" onClick={e=>setAsc(false)}/>
//                             <label for="sort">High to Low</label>
//                         </div>
//                     </div>

//                     <div className="sidebar-divide"></div>

//                     <div className="sidebar-subhead">Categories</div>
//                     <div className="sidebar-content">
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="action" checked={action} onChange={e => setAction(!action)}/>
//                             <label for="action">Action</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="RPG" checked={rpg} onChange={e => setRpg(!rpg)}/>
//                             <label for="RPG">RPG</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="PS" checked={ps} onChange={e => setPs(!ps)}/>
//                             <label for="PS">PS</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="XBOX" checked={xbox} onChange={e => setXbox(!xbox)}/>
//                             <label for="XBOX">XBOX</label>
//                         </div>
//                         <div className="sidebar-cont-item">
//                             <input type="checkbox" name="Sports" checked={sports} onChange={e => setSports(!sports)}/>
//                             <label for="Sports">Sports</label>
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
//                 <div className="content-head"><h3>Games</h3></div>
//                 <div className="merch-cards">
//                     {games && games.map((product)=>
//                         <Card product={product} key={product.id} />
//                     )}
//                     {console.log(games)}
                  
                    
                    
//                 </div>
//             </div>
//         </div>
//     </div></>
//   )
// }
