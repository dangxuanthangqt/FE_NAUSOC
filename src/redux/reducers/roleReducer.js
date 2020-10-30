import { GET_ALL_ROLES_SUCCESS } from "../actionTypes/RoleActionType";

const initialState = {
  roles: [
    {
      _id: "5f6b0a22ac88a43eb0389a42",
      name: "a",
      description: "a",
      __v: 0,
    },
  ],
};
export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
      };

    default:
      return state;
  }
};
