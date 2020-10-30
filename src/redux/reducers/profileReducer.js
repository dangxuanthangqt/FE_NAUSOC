import {
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes/ProfileActionTypes";
import produce from "immer";
import { LOGIN_SUCCESS } from "../actionTypes/AuthenActionType";
const initialState = {
  data: {
    first_name: "",
    last_name: "",
    email: "",
    role_id: {
      name: "",
    },
  },
};
// export const profileReducer = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//       case GET_PROFILE_SUCCESS: {
//         const data = action.payload;
//         draft.first_name = data.first_name;
//         draft.last_name = data.last_name
//         return draft;
//       }
//       default:
//         return draft;
//     }
//   });
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload,
        },
      };
    
    default:
      return {
        ...state,
      };
  }
};
