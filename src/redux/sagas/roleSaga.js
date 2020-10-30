import { call, put, takeEvery } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";
import axiosService from "../../services/axios/axiosService";
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  getAllRoles,
  getAllRoleSuccess,
} from "../actionCreators/RoleActionCreator";
import {
  ADD_ROLE_REQUEST,
  DELETE_ROLE_REQUEST,
  GET_ALL_ROLES,
} from "../actionTypes/RoleActionType";

export function* roleSaga() {
  yield takeEvery(GET_ALL_ROLES, watchGetAllRoles);
  yield takeEvery(ADD_ROLE_REQUEST, watchAddRole);
  yield takeEvery(DELETE_ROLE_REQUEST, watchDeleteRole);
}
function* watchGetAllRoles() {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/roles");

    yield put(getAllRoleSuccess(res.data.data));
    yield put(hideLoading());
  } catch (e) {
    yield call(toastifyError, "ERROR 500");
    yield put(hideLoading());
  }
}
function* watchAddRole({ payload }) {
  try {
    const res = yield call(axiosService.post, "/roles", payload);
    yield call(toastifySuccess, res.data.message);
    yield put(getAllRoles());
  } catch (e) {
    yield call(toastifyError, e.data.message);
  }
}
function* watchDeleteRole({ payload }) {
  try {
    const res = yield call(axiosService.delete, `/roles/${payload}`);
    yield call(toastifySuccess, res.data.message);
    yield put(getAllRoles());
  } catch (e) {
    yield call(toastifyError, "ERROR 500");
  }
}
