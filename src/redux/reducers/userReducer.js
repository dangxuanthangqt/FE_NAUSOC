import { GET_ALL_USER_SUCCESS } from "../actionTypes/UserActionType";

const initialState = {
  listUsers: [
    {
      _id: "5f69bb51e0628637dc10e203",
      status: "active",
      first_name: "dang",
      last_name: "xuan",
      email: "dangxuanthangqt97@gmail.com",
      role_id: "5f5dde524d491b6886ec2bde",
      create_at: "2020-09-22T08:52:33.308Z",
      __v: 0,
      role: {
        _id: "5f5dde524d491b6886ec2bde",
        name: "Tổ cắt",
        description: "cắt vui vui",
      },
    },
  ],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.payload,
      };

    default:
      return state;
  }
};
