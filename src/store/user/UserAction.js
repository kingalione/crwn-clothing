import { USER_ACTION_TYPES } from "./UserTypes";
import { createAction } from "../../utils/reducer/ReducerUtils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
