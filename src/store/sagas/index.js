import { fork, all } from "redux-saga/effects";
import search from "../../features/search/sagas";

export default function* rootSaga() {
  yield all([fork(search)]);
}
