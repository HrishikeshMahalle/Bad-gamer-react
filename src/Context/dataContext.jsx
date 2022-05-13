import {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    //   case"INITIAL_PDTS":
    //   return {
    //       ...state,
    //       product: [...action.payload]
    //   }
    case "HARDWARE_PDTS":
      return {
        ...state,
        hardware: action.payload,
      };
    case "INITIAL_CATEGORIES":
      const category = action.payload.reduce(
        (acc, val) => ({ ...acc, [`${val.categoryName}`]: false }),
        {}
      );
      return {
        ...state,
        category: {
          ...state.category,
          ...category,
        },
      };
    case "CATEGORIES":
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      };
    case "SORT":
      return {
        ...state,
        sortByPrice: action.payload,
      };
    case "COUNT_ITEM":
      return {
        ...state,
        amtOfItem: state.amtOfItem + 1,
      };
    case "DECOUNT_ITEM":
      return {
        ...state,
        amtOfItem: state.amtOfItem - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export const mainDataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [amt, setAmt] = useState(1);

  const [state, dispatch] = useReducer(reducer, {
    category: {},
    sortByPrice: null,
    amtOfItem: 0,
    priceRange: "",
  });

  function getSortedData() {
    if (state.sortByPrice && state.sortByPrice === "HIGH_TO_LOW") {
      return product.sort((a, b) => a.price - b.price);
    }
    if (state.sortByPrice && state.sortByPrice === "LOW_TO_HIGH") {
      return product.sort((a, b) => b.price - a.price);
    }
  }
  getSortedData();

  // function amtItem(){
  //   if(state.amtOfItem && state.amtOfItem === "INCREMENT"){
  //     return setAmt(amt => amt + 1)
  //   }
  //   if(state.amtOfItem && state.amtOfItem === "DECREMENT"){
  //     return setAmt(amt => amt - 1)
  //   }
  // }
  // amtItem()

  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/products");
      setProduct([...data.data.products]);

      const { data: categories } = await axios.get("/api/categories");

      dispatch({
        type: "INITIAL_CATEGORIES",
        payload: categories.categories,
      });
    })();
  }, []);

  const checkboxHandler = (key, e) => {
    dispatch({
      type: "CATEGORIES",
      payload: {
        [key]: e.target.checked,
      },
    });
  };

  const sortDataUp = () => {
    dispatch({
      type: "SORT",
      payload: "HIGH_TO_LOW",
    });
  };
  const sortDataDown = () => {
    dispatch({
      type: "SORT",
      payload: "LOW_TO_HIGH",
    });
  };

  // const addItem = () =>{
  //   dispatch({
  //     type:"COUNT_ITEM",
  //     payload:"INCREMENT"
  //   })
  // }
  // const removeItem = () =>{
  //   dispatch({
  //     type:"DECOUNT_ITEM",
  //     payload:"DECREMENT"
  //   })
  // }

  // useEffect(()=>{
  //     dispatch({type:"HARDWARE_PDTS",payload:[...product.filter(product => product.categoryName === "Hardware")]})
  // },[product])
  const value = {
    category: state.category,
    hardware: state.hardware,
    dispatch,
    product,
    checkboxHandler,
    sortDataUp,
    sortDataDown,
    // removeItem,
    // addItem,
    // amtOfItem: state.amtOfItem,
  };

  return (
    <mainDataContext.Provider value={value}>
      {children}
    </mainDataContext.Provider>
  );
};

export const useData = () => useContext(mainDataContext);
