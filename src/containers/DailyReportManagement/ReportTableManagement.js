import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Delete_daily_report_request,
  Delete_report_by_admin_request,
  Get_daily_report_by_admin_request,
} from "../../redux/actionCreators/ReportActionCreator";
import MaterialTable from "material-table";
import { format } from "date-fns";
ReportTableManagement.propTypes = {};

function ReportTableManagement(props) {
  const dispatch = useDispatch();
  const dailyReports = useSelector(
    (state) => state.DailyReportAdminState.dailyReports
  );
  useEffect(() => {
    dispatch(Get_daily_report_by_admin_request());
  }, [dispatch]);
  const handleData = () => {
    let temp1 = dailyReports.map((e) => {
      let temp2 = e.mistakes.map((e2) => {
        return e2.name;
      });
      return {
        _id: e._id,
        group: e.user_id.role_id.name,
        standard_product: e.standard_product,
        defective_product: e.defective_product,
        user: e.user_id.email,
        fullName: `${e.user_id.first_name} ${e.user_id.last_name}`,
        date: format(new Date(e.date), "dd/MM/yyyy HH:mm:ss"),
        mistakes: temp2.join(", "),
        description: e.description,
        title: e.title,
      };
    });
    return temp1;
  };
  console.log(dailyReports);
  return (
    <MaterialTable
      style={{ marginTop: "20px" }}
      title="ADMIN - LIST DAILY REPORT"
      columns={[
        { title: "Group", field: "group" },
        { title: "Name", field: "fullName" },

        { title: "Date", field: "date" },
        { title: "Title", field: "title" },
        {
          title: "Description",
          field: "description",
          cellStyle: {
            width: 20,
          },
          headerStyle: {
            width: 20,
          },
        },

        { title: "Standard Products", field: "standard_product" },
        { title: "Defective Products", field: "defective_product" },
        { title: "Mistake", field: "mistakes" },
      ]}
      data={handleData()}
      actions={[
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete report",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this report ?")) {
              dispatch(Delete_report_by_admin_request(rowData._id));
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
    ></MaterialTable>
  );
}

export default ReportTableManagement;
