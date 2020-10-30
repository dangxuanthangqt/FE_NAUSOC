import { call, put, takeLatest } from "redux-saga/effects";
import axiosService from "../../services/axios/axiosService";
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  Get_daily_report_admin_by_date_success,
  Get_daily_report_by_admin_request,
  Get_daily_report_by_admin_success,
} from "../actionCreators/ReportActionCreator";
import {
  DELETE_REPORT_BY_ADMIN_REQUEST,
    GET_DAILY_REPORT_ADMIN_BY_DATE_REQUEST,
  GET_DAILY_REPORT_BY_ADMIN_REQUEST,

} from "../actionTypes/ReportActionType";

export function* dailyReportAdminSaga() {
  yield takeLatest(GET_DAILY_REPORT_BY_ADMIN_REQUEST, watchGetDailyReport);
  yield takeLatest(DELETE_REPORT_BY_ADMIN_REQUEST, watchDeleteReport);
  yield takeLatest(GET_DAILY_REPORT_ADMIN_BY_DATE_REQUEST, watchGetDailyReportByDate);
}
function* watchGetDailyReport({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/daily-reports/admin/all");
    console.log(res.data.data);
    yield put(Get_daily_report_by_admin_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
  }
}
function* watchDeleteReport({ payload }) {
  try {
    const res = yield call(axiosService.delete, `/daily-reports/${payload}`);
    yield put(Get_daily_report_by_admin_request());
  } catch (error) {
    console.log(error);
  }
}
function* watchGetDailyReportByDate({ payload }) {
    console.log(payload)
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/daily-reports/admin/" + payload);
    yield put(Get_daily_report_admin_by_date_success(res.data.data));
    yield put(hideLoading())
  } catch (error) {
    yield put(hideLoading())
  }
}
