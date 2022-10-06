import { CATEGORIES_ACTION_TYPE } from "./CategoryType";
import { createAction } from "../../utils/reducer/ReducerUtils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
