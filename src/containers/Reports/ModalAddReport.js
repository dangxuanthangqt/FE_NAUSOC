import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Create_daily_report_request } from "../../redux/actionCreators/ReportActionCreator";
import MultiSelect from "./MultiSelect";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function ModalAddReport(props) {
  const { handleClose, open } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card style={{ width: "40%" }}>
          <Typography
            style={{ textAlign: "center", margin: "10px 0px" }}
            component="h1"
            variant="h5"
          >
            ADD DAILY REPORT
          </Typography>
          <CardContent>
            <Formik
              initialValues={{
                date: new Date(),
                title: "",
                description: "",
                mistakes: [],
              }}
              validationSchema={Yup.object().shape({
                title: Yup.string().required("Title is required !"),
                description: Yup.string().required("Content is required !"),
                mistakes: Yup.array().required("Mistake is required !"),
              })}
              onSubmit={(values) => {
                dispatch(Create_daily_report_request(values));
                handleClose();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <DateTimePicker
                          label="Date"
                          fullWidth
                          inputVariant="outlined"
                          value={props.values.date}
                          onChange={(values) => {
                            props.setFieldValue("date", values);
                            console.log(values);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          multiline
                          rows={2}
                          size="small"
                          name="title"
                          variant="outlined"
                          required
                          fullWidth
                          label="Title"
                          value={props.values.title}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.title && props.touched.title
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.title && props.touched.title
                              ? props.errors.title
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          multiline
                          rows={5}
                          size="small"
                          name="description"
                          variant="outlined"
                          required
                          fullWidth
                          label="Content"
                          value={props.values.description}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.description &&
                            props.touched.description
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.description &&
                            props.touched.description
                              ? props.errors.description
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MultiSelect
                          onBlur={props.handleBlur}
                          error={
                            props.errors.mistakes && props.touched.mistakes
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.mistakes && props.touched.mistakes
                              ? props.errors.mistakes
                              : ""
                          }
                          handleChange={props.setFieldValue}
                        ></MultiSelect>
                        {props.errors.mistakes && props.touched.mistakes ? (
                          <FormHelperText style={{color:"red"}}>
                            {props.errors.mistakes}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>

                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={props.handleSubmit}
                        >
                          ADD
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          onClick={handleClose}
                        >
                          CANCEL
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

ModalAddReport.propTypes = {};

export default ModalAddReport;
