import { GET_DAILY_REPORT_ADMIN_BY_DATE_SUCCESS, GET_DAILY_REPORT_BY_ADMIN_SUCCESS } from "../actionTypes/ReportActionType";

const initialState = {
  dailyReports: [
    {
      mistakes: [
        {
          _id: "5f773805821ba1327c8bdad1",
          role_id: {
            _id: "5f6b1d60aff8f828642ed6f5",
            name: "Tổ cắt",
            description: "Đây là tổ cắt",
            create_at: "2020-09-23T10:03:12.606Z",
            __v: 0,
          },
          name: "Cắt tào lao1",
          description: "chán đời1",
          create_at: "2020-10-02T14:24:05.688Z",
          __v: 0,
        },
      ],
      _id: "5f7804c9d1ddd80eb8e6217d",
      date: "2020-10-03T04:57:10.566Z",
      title: "Báo cáo test",
      description:
        "",
      user_id: {
        status: "active",
        _id: "5f76dd7816689a16f42c3395",
        first_name: "nau",
        last_name: "soc",
        email: "nausoc1997@gmail.com",
        role_id: {
          _id: "5f6b1d60aff8f828642ed6f5",
          name: "Tổ cắt",
          description: "Đây là tổ cắt",
          create_at: "2020-09-23T10:03:12.606Z",
          __v: 0,
        },
        create_at: "2020-10-02T07:57:44.013Z",
        __v: 0,
      },
      update_at: "2020-10-03T04:57:45.212Z",
      __v: 0,
    },
  ],
};
export const dailyReportAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_REPORT_BY_ADMIN_SUCCESS: {
      return {
        ...state,
        dailyReports: [...action.payload],
      };
    }
    case GET_DAILY_REPORT_ADMIN_BY_DATE_SUCCESS:
      return {
        ...state,
        dailyReports: [...action.payload],
      };
    default:
      return state;
  }
};
