import { client } from "../../Service/apollo";
import { GET_CATEGORIES } from "../../Service/queries/getCategories";
import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "../../Constant/Actions";

export const loadCategories = () => async (dispatch) => {
  const {
    data: { categories },
  } = await client.query({ query: GET_CATEGORIES, fetchPolicy: "no-cache" });

  const categoryObject = {};
  for (let category of categories) {
    categoryObject[category.name] = category;
  }

  dispatch({
    type: LOAD_CATEGORIES,
    payload: categoryObject,
  });
};

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: category,
  });
};
