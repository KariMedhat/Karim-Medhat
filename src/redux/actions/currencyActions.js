import { client } from "../../Service/apollo";
import { GET_CURRENCIES } from "../../Service/queries/getCurrencies";
import { CHANGE_CURRENCY, GET_CURRENCY } from "../../Constant/Actions";
export const loadCurrencies = () => async (dispatch) => {
  const {
    data: { currencies },
  } = await client.query({ query: GET_CURRENCIES });

  dispatch({
    type: GET_CURRENCY,
    payload: currencies,
  });
};

export const setCurrentCurrency = (currency) => (dispatch) => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: currency,
  });
};
