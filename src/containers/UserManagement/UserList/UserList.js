import AddBoxIcon from "@material-ui/icons/AddBox";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LockIcon from '@material-ui/icons/Lock';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import EditIcon from '@material-ui/icons/Edit';
import {
  Delete_item_request,
  Updata_item_edit_to_redux,
} from "../../../redux/actionCreators/ItemActionCreator";
import {
  Get_all_user_request,
  Change_status_user_request,
  Delete_user_request, Reset_password
} from "../../../redux/actionCreators/UserActionCreator";
UserList.propTypes = {};

function UserList(props) {
  const dispatch = useDispatch();
  const { handleOpen,handleDataModal } = props;
  const listUsers = useSelector((state) => state.UserState.listUsers);
  const handleData = () => {
    let temp = listUsers.map((e, i) => {
      return {
        ...e,
        role_name: e.role.name,
      };
    });
    return temp;
  };
  useEffect(() => {
    dispatch(Get_all_user_request());
  }, []);
  return (
    <MaterialTable
      title="LIST USERS"
      columns={[
        { title: "First name", field: "first_name" },
        { title: "Last name", field: "last_name" },
        { title: "Email", field: "email" },
        { title: "Group", field: "role_name" },
        { title: "Status", field: "status" },
      ]}
      data={handleData()}
      actions={[
        (rowData) => ({
          icon: () => rowData.status =="active"? <LockOpenIcon style={{ color:"green"}}></LockOpenIcon>: <LockIcon style={{color:"red"}}></LockIcon>,
          tooltip: "Change Status",
          onClick: (event, rowData) => {
            let data = {
              id: rowData._id,
              status: rowData.status === "active" ? "disable" : "active",
            };
            
            if (window.confirm("Do you want change status this users ?")) {
              dispatch(Change_status_user_request(data));
            }
          },
        }),

        (rowData) => ({
          icon: ()=> <RotateLeftIcon style={{color:"blue"}}></RotateLeftIcon>,
          tooltip: "Reset Password",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to reset password ?")) {
              dispatch(Reset_password(rowData._id));
            }
          },
        }),
        (rowData) => ({
          icon: ()=> <EditIcon style={{color:"blue"}}></EditIcon>,
          tooltip: "Details",
          onClick: (event, rowData) => {
            handleDataModal(rowData);
            handleOpen();
            
          },
        }),
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this user?")) {
              dispatch(Delete_user_request(rowData._id));
            }
          },
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}

export default UserList;
