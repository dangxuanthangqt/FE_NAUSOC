import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  DELETE_USER_REQUEST,
  CHANGE_STATUS_REQUEST, RESET_PASSWORD, UPDATE_USER_REQUEST
} from "../actionTypes/UserActionType";

export const Get_all_user_request = (data) => {
  return {
    type: GET_ALL_USER_REQUEST,
    payload: data,
  };
};
export const Get_all_user_success = (data) => {
  return {
    type: GET_ALL_USER_SUCCESS,
    payload: data,
  };
};
export const Delete_user_request = (data) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: data,
  };
};
export const Change_status_user_request = (data) => {
  return {
    type: CHANGE_STATUS_REQUEST,
    payload: data,
  };
};
export const Reset_password=(data)=>{
  return {
    type:RESET_PASSWORD,
    payload:data
  }
}
export const Update_user_request=(data)=>{
  return {
    type: UPDATE_USER_REQUEST,
    payload: data
  }
}