import { CATEGORIES_ACTION_TYPE } from "./CategoryType";
import { createAction } from "../../utils/reducer/ReducerUtils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
