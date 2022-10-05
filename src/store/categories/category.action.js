import { CATEGORIES_ACTION_TYPES } from "./category.types";
import createAction from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATRGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATRGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATRGORIES_FAILED, error)


// For Redux Thunk Async Redux
export const fetchCategoriesAsync = () => async(dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocments('categories')
    dispatch(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
    
  }
}