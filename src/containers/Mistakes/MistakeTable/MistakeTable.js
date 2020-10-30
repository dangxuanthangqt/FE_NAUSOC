import MaterialTable from "material-table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkRole } from "../../../Helpers/checkRole";
import { Delete_mistake_request } from "../../../redux/actionCreators/MistakeActionCreator";
import EditIcon from "@material-ui/icons/Edit";
export default function MistakeTable(props) {
  const listMistakes = useSelector((state) => state.MistakeState.listMistakes);
  const dispatch = useDispatch();
  const { handleOpenEdit,handleDataEdit } = props;
  const handleData = () => {
    const temp = listMistakes.map((e) => {
      return {
        ...e,
        group: e.role_id.name,
      };
    });
    
    return temp;
  };
  return (
    <MaterialTable
      style={{ marginTop: "20px" }}
      title="LIST MISTAKES"
      columns={[
        { title: "Group", field: "group" },
        { title: "Name", field: "name" },
        { title: "Description", field: "description" },
      ]}
      data={handleData()}
      actions={[
        (rowData) => ({
          icon: () => <EditIcon style={{color:"blue"}}></EditIcon>,
          tooltip: "Detail",
          onClick: (event, rowData) => {
            handleDataEdit(rowData);
            handleOpenEdit();
          },
        }),
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete mistake",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this mistake ?")) {
              dispatch(Delete_mistake_request(rowData._id));
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
