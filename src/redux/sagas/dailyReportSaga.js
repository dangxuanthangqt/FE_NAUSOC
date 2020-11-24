import { call, put, takeEvery } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";
import axiosService from "../../services/axios/axiosService";
import  startOfDay  from 'date-fns/startOfDay'
import  endOfDay  from 'date-fns/endOfDay'
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  Get_daily_report_request,
  Get_daily_report_success,
} from "../actionCreators/ReportActionCreator";
import {
  CREATE_DAILY_REPORT_REQUEST,
  DELETE_DAILY_REPORT_REQUEST,
  GET_DAILY_REPORT_BY_DATE_REQUEST,
  GET_DAILY_REPORT_REQUEST,
} from "../actionTypes/ReportActionType";

export function* dailyreportSaga() {
  yield takeEvery(CREATE_DAILY_REPORT_REQUEST, watchCreateDailyReport);
  yield takeEvery(GET_DAILY_REPORT_REQUEST, watchGetDailyReport);
  yield takeEvery(GET_DAILY_REPORT_BY_DATE_REQUEST, watchGetDailyReport_byDate);
  yield takeEvery(DELETE_DAILY_REPORT_REQUEST,watchDeleteDailyReport)
}
function* watchCreateDailyReport({ payload }) {
  let listMistakes = payload.mistakes.map((e) => {
    return e._id;
  });
  console.log(payload)
  try {
    const res = yield call(axiosService.post, "/daily-reports", {
      ...payload,
      mistakes: listMistakes,
    });
    yield call(toastifySuccess, res.data.message);
    yield put(Get_daily_report_request());
  } catch (e) {
    yield call(toastifyError, e.data.message);
  }
}
function* watchGetDailyReport({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.get, "/daily-reports");
    yield put(Get_daily_report_success(res.data.data));
    yield put(hideLoading());
    
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchGetDailyReport_byDate({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(axiosService.post, `/daily-reports/date`,{startDate:startOfDay(payload.startDate),endDate:endOfDay(payload.endDate)});
    yield put(Get_daily_report_success(res.data.data));
    yield put(hideLoading());
    yield call(toastifySuccess, res.data.message);
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, e.data.message);
  }
}
function* watchDeleteDailyReport({ payload }) {
  try {
    const res = yield call(axiosService.delete, `/daily-reports/${payload}`);
    yield put(Get_daily_report_request());

    yield call(toastifySuccess, res.data.message);
  } catch (e) {
    yield call(toastifyError, e.data.message);
  }
}
