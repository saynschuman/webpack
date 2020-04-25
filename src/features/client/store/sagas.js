import { takeLatest, put, all } from "redux-saga/effects";
import { clientAPI } from "../../../commons/api/client";
import * as constants from "./constants";
import * as actions from "./actions";

export function* dataWorker() {
  try {
    const user = yield clientAPI.user.getActiveUser();
    yield put(actions.getActiveUserSuccess(user));
  } catch {
    yield put(actions.getActiveUserError());
  }
}

export default function* watcher() {
  yield all([takeLatest(constants.GET_ACTIVE_USER + "START", dataWorker)]);
}
