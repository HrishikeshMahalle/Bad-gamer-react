export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    // {
    //     state.products.map((product)=>{
    //         if(product.id === action.payload){
    //             console.log("frm App reducer",action.payload)
    //             state.wishlist.push(product)
    //             return state
    //         }
    //     })

    // }
    case "ADD_TO_CARTLIST":
      return {
        ...state,
        cartlist: [...state.cartlist, { ...action.payload }],
      };
    case "INCRE":
      return {
        ...state,
        cartlist: action.payload,
      };
    case "DECRE":
      return {
        ...state,
        cartlist: action.payload,
      };
    case "REM_ITEM_CART":
      return {
        ...state,
        cartlist: action.payload,
      };
    case "REM_ITEM_WISH":
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
