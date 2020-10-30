import {
  ADD_ROLE_REQUEST,
  ADD_ROLE_SUCCESS,
  DELETE_ROLE_REQUEST,
  GET_ALL_ROLES,
  GET_ALL_ROLES_SUCCESS,
} from "../actionTypes/RoleActionType";

export const getAllRoles = () => {
  return {
    type: GET_ALL_ROLES,
  };
};
export const getAllRoleSuccess = (data) => {
  return {
    type: GET_ALL_ROLES_SUCCESS,
    payload: data,
  };
};
export const Add_role_request = (data) => {
  return {
    type: ADD_ROLE_REQUEST,
    payload: data,
  };
};
export const Add_role_success = (data) => {
  return {
    type: ADD_ROLE_SUCCESS,
    payload: data,
  };
};
export const Delete_role_request = (data) => {
  return {
    type: DELETE_ROLE_REQUEST,
    payload: data,
  };
};
