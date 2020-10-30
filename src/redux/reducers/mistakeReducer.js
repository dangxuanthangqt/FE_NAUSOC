import { GET_MISTAKE_FOLLOWID_SUCCESS } from "../actionTypes/MistakeActionType";

const initialState = {
  listMistakes: [
    {
      _id: "5f76e6e108b1ab36f06fc8ef",
      role_id: {
        _id: "5f6b1d60aff8f828642ed6f5",
        name: "Tổ cắt",
      },
      name: "Loi xi ke",
      description: "test",
      create_at: "2020-10-02T08:37:53.355Z",
      __v: 0,
    },
  ],
};
export const mistakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISTAKE_FOLLOWID_SUCCESS:
      return {
        ...state,
        listMistakes: action.payload,
      };

    default:
      return state;
  }
};
