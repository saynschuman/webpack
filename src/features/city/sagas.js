import { put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { GET_RECENT_WEATHER } from "./reducer";
import { getForecastWeatherByCoords } from "../../commons/api";

export function* dataWorker(data) {
  const { coords } = data;
  const res = yield getForecastWeatherByCoords(coords);
  if (!res.error) {
    yield put(actions.getRecentWeatherSuccess(res));
  } else {
    yield put(actions.getRecentWeatherError());
  }
}

export default function* watcher() {
  yield takeLatest(GET_RECENT_WEATHER + "_START", dataWorker);
}
