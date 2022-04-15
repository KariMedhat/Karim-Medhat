import { client } from "../../Service/apollo";
import { GET_PRODUCT } from "../../Service/queries/getProducts";
import {
  GET_PRODUCT as PRODUCT,
  CLEAN_PRODUCT,
  UPDATE_PRODUCT,
} from "../../Constant/Actions";
export const getProduct = (id) => async (dispatch) => {
  const {
    data: { product },
  } = await client.query({
    query: GET_PRODUCT,
    fetchPolicy: "no-cache",
    variables: {
      id,
    },
  });

  dispatch({
    type: PRODUCT,
    payload: {
      product,
      isLoading: true,
    },
  });
};

export const updateProduct = (updatedProduct) => (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: updatedProduct,
  });
};

export const clearProduct = () => (dispatch) => {
  dispatch({
    type: CLEAN_PRODUCT,
  });
};
