import { CHANGE_CURRENCY, GET_CURRENCY } from "../../Constant/Actions";

const initialState = {
  data: [],
  currentSymbol: "$",
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currentSymbol: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
