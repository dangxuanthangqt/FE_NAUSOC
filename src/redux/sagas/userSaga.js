import { call, put, takeEvery } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";
import axiosService from "../../services/axios/axiosService";
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  getProfileRequest,
  getProfileSuccess,
} from "../actionCreators/ProfileActionCreator";
import {
  Get_all_user_request,
  Get_all_user_success,
} from "../actionCreators/UserActionCreator";
import {
  GET_PROFILE_REQUEST,
  UPDATE_PROFILE_REUQEST,
} from "../actionTypes/ProfileActionTypes";
import {
  CHANGE_STATUS_REQUEST,
  DELETE_USER_REQUEST,
  GET_ALL_USER_REQUEST,
  RESET_PASSWORD,
  UPDATE_USER_REQUEST,
} from "../actionTypes/UserActionType";

export function* userSaga() {
  yield takeEvery(GET_ALL_USER_REQUEST, watchGetAllUser);
  yield takeEvery(CHANGE_STATUS_REQUEST, watchChangeStatus);
  yield takeEvery(RESET_PASSWORD, watchResetPassword);
  yield takeEvery(UPDATE_USER_REQUEST, watchUpdateUserFollowId);
  yield takeEvery(DELETE_USER_REQUEST, watchDeleteUserFollowId);
  yield takeEvery(GET_PROFILE_REQUEST, watchGetProfileRequest);
  yield takeEvery(UPDATE_PROFILE_REUQEST, watchUpdateProfile);
}
function* watchGetProfileRequest({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/users/me");
    yield put(getProfileSuccess(res.data.data));
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchUpdateProfile({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.patch, "/users/me", payload);
    yield put(getProfileRequest());
    yield put(hideLoading());
    yield call(toastifySuccess, "Update successully !");
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchGetAllUser() {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/users");
    yield put(Get_all_user_success(res.data.data));
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchChangeStatus({ payload }) {
  try {
    const res = yield call(axiosService.put, "/users/change-status", payload);
    yield put(Get_all_user_request());
    yield call(toastifySuccess, "Change user status successfully!");
  } catch (e) {
    yield call(toastifyError, "ERROR 500");
  }
}
function* watchResetPassword({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.put, "/users/reset-password", {
      id: payload,
    });

    yield call(toastifySuccess, res.data.message);
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchUpdateUserFollowId({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.put, "/users/update-user-id", payload);
    yield put(Get_all_user_request());
    yield call(toastifySuccess, res.data.message);
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchDeleteUserFollowId({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.delete, `/users/${payload}`);
    yield put(Get_all_user_request());
    yield call(toastifySuccess, res.data.message);
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
