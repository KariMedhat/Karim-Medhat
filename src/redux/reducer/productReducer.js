import {
    GET_PRODUCT, UPDATE_PRODUCT, CLEAN_PRODUCT} from "../../Constant/Actions";
  const initialState = {
    data: {
      gallery: [],
      prices: [],
      attributes: [],
    },
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
          data: action.payload.product,
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          data: action.payload,
        };
      case CLEAN_PRODUCT:
        return {
          ...state,
          data: {
            gallery: [],
            prices: [],
            attributes: [],
            inStock: true,
          },
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  