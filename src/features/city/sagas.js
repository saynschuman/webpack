import { put, takeLatest, all } from "redux-saga/effects";
import * as actions from "./actions";
import { GET_RECENT_WEATHER } from "./reducer";
import { getForecastWeatherByCoords } from "../../commons/api";

export function* dataWorker(data) {
  const { payload } = data;
  const res = yield getForecastWeatherByCoords(payload.coords);
  if (!res.error) {
    yield put(actions.getRecentWeatherSuccess(res));
  } else {
    yield put(actions.getRecentWeatherError());
  }
}

export default function* watcher() {
  yield all([takeLatest(GET_RECENT_WEATHER + "_START", dataWorker)]);
}
