import React from "react";
import Card from "../../Utilities/Card/card";
import Header from "../../Utilities/Header/header";
import "./Styles/merch.css";

import { useData } from "../../Context/dataContext";

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

  const { product, category, checkboxHandler, sortDataUp, sortDataDown } =
    useData();

  // const [hardware,setHardware] = useState([...product.filter(product => product.categoryName === "Hardware")])

  const filterData = (hardware, categories) => {
    const checkedCategories = Object.entries(categories)
      .filter((cat) => cat[1] === true)
      .map((cat) => cat[0]);
    const filteredProducts = hardware.filter((product) =>
      checkedCategories.includes(product.categoryName)
    );
    // console.log(filteredProducts);
    return filteredProducts.length > 0 ? filteredProducts : hardware;
  };
  const filteredData = filterData(product, category);

  return (
    <>
      <div className="container">
        <Header />
        <div className="merch-page">
          <div className="merch-sidebar">
            <div className="sidebar-head">
              <span>Filters</span>
              <div className="sidebar-head-btn">ClearAll</div>
            </div>
            <div className="sidebar-divide"></div>
            {Object.entries(category).map(([key, val]) => {
              return (
                <div key={key}>
                  <div className="sidebar-content">
                    <div className="sidebar-cont-item">
                      <input
                        type="checkbox"
                        checked={val}
                        onChange={(e) => checkboxHandler(key, e)}
                      />
                      <label>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="sidebar-subhead">SORT</div>
            <div className="sidebar-content">
              <div className="sidebar-cont-item">
                <input
                  type="radio"
                  name="sort"
                  id=""
                  onChange={(e) => sortDataUp()}
                />
                <label className="slider-head">Low to High</label>
              </div>
              <div className="sidebar-cont-item">
                <input
                  type="radio"
                  name="sort"
                  id=""
                  onChange={(e) => sortDataDown()}
                />
                <label>High to Low</label>
              </div>
            </div>
          </div>

          <div className="merch-content">
            <div className="content-head">
              <h3>All Products</h3>
            </div>
            <div className="merch-cards">
              {filteredData &&
                filteredData.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
