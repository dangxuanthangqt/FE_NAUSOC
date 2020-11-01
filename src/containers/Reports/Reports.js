import { Button, Container, Grid, Typography } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkRole } from "../../Helpers/checkRole";
import { Get_mistake_followID_request } from "../../redux/actionCreators/MistakeActionCreator";
import ModalAddReport from "./ModalAddReport";
import SearchIcon from "@material-ui/icons/Search";
import ReportTable from "./ReportTable";
import { Get_daily_report_by_date_request, Get_daily_report_request } from "../../redux/actionCreators/ReportActionCreator";
export default function Reports() {
  const [open, setOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectEndDate,setSelectEndDate] = useState(new Date());
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(Get_mistake_followID_request());

  }, [dispatch]);
  const handleFindByDate=()=>{
   // dispatch(Get_daily_report_by_date_request(selectedDate));
   const value={
     startDate : selectedDate,
     endDate: selectEndDate
   }
   dispatch(Get_daily_report_by_date_request(value));
  }
  const handleGetAllDailyReport=()=>{
    dispatch(Get_daily_report_request());
  }
  return (
    <Container>
      <ModalAddReport open={open} handleClose={handleClose}></ModalAddReport>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            DAILY REPORTS
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            Add report, {checkRole()}
          </Button>
        </Grid>
      </Grid>
      <Grid style={{ display: "flex", marginTop: "20px" }}>
        <KeyboardDatePicker
          style={{ marginRight: "20px" }}
          autoOk
          size="small"
          variant="inline"
          inputVariant="outlined"
          label="Select start date"
          format="dd/MM/yyyy"
          value={selectedDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => handleDateChange(date)}
        />
        <KeyboardDatePicker
          style={{ marginRight: "20px" }}
          autoOk
          size="small"
          variant="inline"
          inputVariant="outlined"
          label="Select end date"
          format="dd/MM/yyyy"
          value={selectEndDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => setSelectEndDate(date)}
        />
        <Button onClick={handleFindByDate} variant="contained" color="primary">
          <SearchIcon></SearchIcon>
          Find
        </Button>
      </Grid>
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={handleGetAllDailyReport}
      >
        Get all daily report
      </Button>
      <ReportTable></ReportTable>
    </Container>
  );
}
