import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import ReportTableManagement from "./ReportTableManagement";
import {
  Get_daily_report_admin_by_date_request,
  Get_daily_report_by_admin_request,
} from "../../redux/actionCreators/ReportActionCreator";
DailyReportManagement.propTypes = {};

function DailyReportManagement(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const dispatch = useDispatch();
  const handleFindByDate = () => {
    
    // console.log("Aaaaaaaaaaaa")
    const value = {
      startDate: selectedDate,
      endDate: selectedEndDate,
    };
     dispatch(Get_daily_report_admin_by_date_request(value))
    
  };
  const handleGetAllDailyReport = () => {
    dispatch(Get_daily_report_by_admin_request());
  };
  return (
    <Container>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            DAILY REPORTS
          </Typography>
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
          label="Select start date"
          format="dd/MM/yyyy"
          value={selectedEndDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date) => setSelectedEndDate(date)}
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
      <ReportTableManagement></ReportTableManagement>
    </Container>
  );
}

export default DailyReportManagement;
