import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import ModalAddGroup from "./ModalAddGroup";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import {
  Delete_role_request,
  getAllRoles,
} from "../../redux/actionCreators/RoleActionCreator";

function GroupManagement(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listRoles = useSelector((state) => state.Roles.roles);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllRoles());
  }, []);
  return (
    <Container>
      <ModalAddGroup handleClose={handleClose} open={open}></ModalAddGroup>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            GROUPS
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            Add group
          </Button>
        </Grid>
      </Grid>
      <MaterialTable
        style={{ marginTop: "20px" }}
        title="LIST GROUPS"
        columns={[
          { title: "Name", field: "name" },
          { title: "Description", field: "description" },
        ]}
        data={listRoles}
        actions={[
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete Group",
            onClick: (event, rowData) => {
              if (window.confirm("Do you want to delete this group ?")) {
                dispatch(Delete_role_request(rowData._id));
              }
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </Container>
  );
}

GroupManagement.propTypes = {};

export default GroupManagement;
