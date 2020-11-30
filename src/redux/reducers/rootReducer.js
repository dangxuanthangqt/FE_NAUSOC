import { combineReducers } from "redux";
import { dailyReportAdminReducer } from "./dailyReportAminReducer";
import { dailyReportReducer } from "./dailyReportReducer";
import { loadingReducer } from "./loadingReducer";
import { loginReducer } from "./loginReducer";
import { mistakeReducer } from "./mistakeReducer";
import { profileReducer } from "./profileReducer";
import { roleReducer } from "./roleReducer";
import { userReducer } from "./userReducer";
const myReducer = combineReducers({
  Authorization: loginReducer,
  Roles: roleReducer,
  LoadingState: loadingReducer,
  MistakeState: mistakeReducer,
  DailyReportState: dailyReportReducer,
  UserState: userReducer,
  DailyReportAdminState: dailyReportAdminReducer,

  ProfileState: profileReducer,
});
export default myReducer;
