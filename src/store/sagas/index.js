import { fork, all } from "redux-saga/effects";
import search from "@/features/search/sagas";
import city from "@/features/city/sagas";

export default function* rootSaga() {
  yield all([fork(search), fork(city)]);
}
