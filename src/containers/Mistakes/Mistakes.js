import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Get_mistake_followID_request } from "../../redux/actionCreators/MistakeActionCreator";

import ModalAddMiskate from "./ModalAddMistake/ModalAddMistake";

import MistakeTable from "./MistakeTable/MistakeTable";
import { checkRole } from "../../Helpers/checkRole";
import ModalEditMistake from "./ModalEditMistake/ModalEditMistake";
export default function Mistakes() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const handleDataEdit = (data) => {
    setDataEdit(data);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_mistake_followID_request());
  }, []);
  return (
    <Container>
      <ModalAddMiskate handleClose={handleClose} open={open}></ModalAddMiskate>
      <ModalEditMistake dataEdit={dataEdit} handleClose={handleClose1} open={open1}></ModalEditMistake>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            MISTAKES
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            Add mistake, {checkRole()}
          </Button>
        </Grid>
      </Grid>
      <MistakeTable handleDataEdit={handleDataEdit} handleOpenEdit={handleOpen1}></MistakeTable>
    </Container>
  );
}
