import { all, fork } from "redux-saga/effects";
import activeUser from "../../features/client/store/sagas";

export default function* rootSaga() {
  yield all([fork(activeUser)]);
}
