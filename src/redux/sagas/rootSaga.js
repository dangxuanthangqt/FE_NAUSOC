import { fork } from "redux-saga/effects";
import { authenSaga } from "./authenSaga";
import { dailyReportAdminSaga } from "./dailyReportAdminSaga";
import { dailyreportSaga } from "./dailyReportSaga";
import { mistakeSaga } from "./mistakeSaga";
import { roleSaga } from "./roleSaga";
import { userSaga } from "./userSaga";
function* rootSaga() {
  yield fork(authenSaga);
  yield fork(roleSaga);
  yield fork(userSaga);
  yield fork(mistakeSaga);
  yield fork(dailyreportSaga);
  yield fork(dailyReportAdminSaga);
}
export default rootSaga;
