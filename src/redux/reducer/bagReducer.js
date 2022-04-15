import { ACTIVE, ACTIVE_DROPDOWN } from "../../Constant/Actions";

const initialState = {
  active: false,
  activeDrop: false,
};

const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        active: !state.active,
      };
    case ACTIVE_DROPDOWN:
      return {
        ...state,
        activeDrop: action.payload === "close" ? false : !state.activeDrop,
      };
    default:
      return state;
  }
};

export default bagReducer;
