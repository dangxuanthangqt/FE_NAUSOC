import MaterialTable from "material-table";
import { format } from 'date-fns'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete_daily_report_request, Get_daily_report_request } from "../../redux/actionCreators/ReportActionCreator";

export default function ReportTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_daily_report_request());
  }, [dispatch]);
  const listDailyReports = useSelector(
    (state) => state.DailyReportState.listDailyReports
  );
  const handleData = () => {
    let temp1 = listDailyReports.map((e) => {
      let temp2 = e.mistakes.map((e) => {
        return e.name;
      });
      return {
        ...e,
        date: format(new Date(e.date),"dd/MM/yyyy HH:mm:ss"),
        user: e.user_id.email,
        mistakes: temp2.join(",  "),
      };
    });
    return temp1;
  };
  return (
    <MaterialTable
      style={{ marginTop: "20px" }}
      title="LIST DAILY REPORT"
      columns={[
        { title: "User", field: "user" },
        { title: "Date", field: "date" },
        { title: "Title", field: "title" },
        { title: "Description", field: "description",cellStyle: {
            width: "300px",
            
          },
          headerStyle: {
            width:40,
            
          } },
        { title: "Mistake", field: "mistakes" },
      ]}
      data={handleData()}
      actions={[
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete report",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this report ?")) {
              dispatch(Delete_daily_report_request(rowData._id))
            }
          },
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
        exportButton: true,
        exportPdf: () =>
          alert(
            "This feature is disabled. Data can only be exported as a CSV."
          ),
      }}
    />
  );
}
