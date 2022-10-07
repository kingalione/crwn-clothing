import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/CategorySaga";
import { userSagas } from "./user/UserSage";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
