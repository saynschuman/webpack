import { put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { GET_CURRENT_WEATHER } from "./reducer";
import { getCurrentWeatherByCityName } from "@/commons/api";

export function* dataWorker(data) {
  const { cityName } = data;
  const res = yield getCurrentWeatherByCityName(cityName);
  if (!res.error) {
    yield put(actions.getCurrentWeatherSuccess(res));
  } else {
    yield put(actions.getCurrentWeatherError());
  }
}

export default function* watcher() {
  yield takeLatest(GET_CURRENT_WEATHER + "_START", dataWorker);
}
