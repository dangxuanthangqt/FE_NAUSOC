import {
  CREATE_DAILY_REPORT_REQUEST,
  DELETE_DAILY_REPORT_REQUEST,
  DELETE_REPORT_BY_ADMIN_REQUEST,
  GET_DAILY_REPORT_ADMIN_BY_DATE_REQUEST,
  GET_DAILY_REPORT_ADMIN_BY_DATE_SUCCESS,
  GET_DAILY_REPORT_BY_ADMIN_REQUEST,
  GET_DAILY_REPORT_BY_ADMIN_SUCCESS,
  GET_DAILY_REPORT_BY_DATE_REQUEST,
  GET_DAILY_REPORT_REQUEST,
  GET_DAILY_REPORT_SUCCESS,
} from "../actionTypes/ReportActionType";

export const Create_daily_report_request = (data) => {
  return {
    type: CREATE_DAILY_REPORT_REQUEST,
    payload: data,
  };
};
export const Get_daily_report_request = (data) => {
  return {
    type: GET_DAILY_REPORT_REQUEST,
    payload: data,
  };
};
export const Get_daily_report_success = (data) => {
  return {
    type: GET_DAILY_REPORT_SUCCESS,
    payload: data,
  };
};
export const Get_daily_report_by_date_request = (data) => {
  return {
    type: GET_DAILY_REPORT_BY_DATE_REQUEST,
    payload: data,
  };
};
export const Delete_daily_report_request = (data) => {
  return {
    type: DELETE_DAILY_REPORT_REQUEST,
    payload: data,
  };
};

export const Get_daily_report_by_admin_request = (data) => {
  return {
    type: GET_DAILY_REPORT_BY_ADMIN_REQUEST,
    payload: data,
  };
};
export const Get_daily_report_by_admin_success = (data) => {
  return {
    type: GET_DAILY_REPORT_BY_ADMIN_SUCCESS,
    payload: data,
  };
};

export const Delete_report_by_admin_request = (data) => {
  return {
    type: DELETE_REPORT_BY_ADMIN_REQUEST,
    payload: data,
  };
};
export const Get_daily_report_admin_by_date_request=(data)=>{
  return{
    type: GET_DAILY_REPORT_ADMIN_BY_DATE_REQUEST,
    payload : data
  }
}
export const Get_daily_report_admin_by_date_success=(data)=>{
  return{
    type: GET_DAILY_REPORT_ADMIN_BY_DATE_SUCCESS,
    payload : data
  }
}
