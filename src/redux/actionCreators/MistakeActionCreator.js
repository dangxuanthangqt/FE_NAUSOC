import {
  CREATE_MISTAKE_REQUEST,
  CREATE_MISTAKE_SUCCESS,
  DELETE_MISTAKE_REQUEST,
  EDIT_MISTAKE_REQUEST,
  GET_MISTAKE_FOLLOWID_REQUEST,
  GET_MISTAKE_FOLLOWID_SUCCESS,
} from "../actionTypes/MistakeActionType";

export const Get_mistake_followID_request = (data) => {
  return {
    type: GET_MISTAKE_FOLLOWID_REQUEST,
    payload: data,
  };
};
export const Get_mistake_followID_success = (data) => {
  return {
    type: GET_MISTAKE_FOLLOWID_SUCCESS,
    payload: data,
  };
};

export const Create_mistake_request = (data) => {
  return {
    type: CREATE_MISTAKE_REQUEST,
    payload: data,
  };
};
export const Create_mistake_success = (data) => {
  return {
    type: CREATE_MISTAKE_SUCCESS,
    payload: data,
  };
};
export const Delete_mistake_request = (data) => {
  return {
    type: DELETE_MISTAKE_REQUEST,
    payload: data,
  };
};
export const Edit_mistake_request = (data) => {
  return {
    type: EDIT_MISTAKE_REQUEST,
    payload: data,
  };
};
