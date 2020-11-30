import { call, put, takeEvery } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";
import axiosService from "../../services/axios/axiosService";
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  Get_mistake_followID_request,
  Get_mistake_followID_success,
} from "../actionCreators/MistakeActionCreator";
import {
  CREATE_MISTAKE_REQUEST,
  DELETE_MISTAKE_REQUEST,
  EDIT_MISTAKE_REQUEST,
  GET_MISTAKE_FOLLOWID_REQUEST,
} from "../actionTypes/MistakeActionType";

export function* mistakeSaga() {
  yield takeEvery(GET_MISTAKE_FOLLOWID_REQUEST, watchGetMistake);
  yield takeEvery(CREATE_MISTAKE_REQUEST, watchCreateMistake);
  yield takeEvery(DELETE_MISTAKE_REQUEST, watchDeleteMistake);
  yield takeEvery(EDIT_MISTAKE_REQUEST, watchEditMistake);
}
function* watchGetMistake({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/mistakes");
    yield put(Get_mistake_followID_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield call(toastifyError, "ERROR");
  }
}
function* watchCreateMistake({ payload }) {
  try {
    const res = yield call(axiosService.post, "/mistakes", payload);
    yield put(Get_mistake_followID_request());
    yield call(toastifySuccess, res.data.message);
  } catch (error) {
    yield call(toastifyError, "ERROR");
  }
}
function* watchDeleteMistake({ payload }) {
  console.log(payload);
  yield put(showLoading());
  try {
    const res = yield call(axiosService.delete, `/mistakes/${payload}`);
    yield put(Get_mistake_followID_request());
    yield call(toastifySuccess, res.data.message);
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, "ERROR");
    yield put(hideLoading());
  }
}
function* watchEditMistake({ payload }) {
  console.log(payload);
  try {
    const res = yield call(axiosService.put, "/mistakes", payload);
    yield put(Get_mistake_followID_request());
    yield call(toastifySuccess, res.data.message);
  } catch (e) {
    yield call(toastifyError, "ERROR");
  }
}
