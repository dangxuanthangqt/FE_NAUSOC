import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { loadingReducer } from "./loadingReducer";
import { profileReducer } from "./profileReducer";
import { campaignReducer } from "./campaignReduer";
import { itemReducer } from "./itemReducer";
import { userReducer } from "./userReducer";
import { roleReducer } from "./roleReducer";
import { mistakeReducer } from "./mistakeReducer";
import { dailyReportReducer } from "./dailyReportReducer";
import { dailyReportAdminReducer } from "./dailyReportAminReducer";
const myReducer = combineReducers({
  Authorization: loginReducer,
  Roles: roleReducer,
  LoadingState: loadingReducer,
  MistakeState: mistakeReducer,
  DailyReportState: dailyReportReducer,
  UserState: userReducer,
  DailyReportAdminState: dailyReportAdminReducer,


  ProfileState: profileReducer,
  CampaignState: campaignReducer,
  ItemState: itemReducer,

});
export default myReducer;
