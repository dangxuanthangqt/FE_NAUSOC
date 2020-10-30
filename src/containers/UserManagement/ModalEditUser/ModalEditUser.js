import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import format from "date-fns/format";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Update_user_request } from "../../../redux/actionCreators/UserActionCreator";

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
function ModalEditUser(props) {
  const { handleClose, data, open } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
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
            style={{ textAlign: "center" }}
            component="h1"
            variant="h5"
          >
            User detail
          </Typography>
          <CardContent>
            <Formik
              initialValues={{
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                role_name: data.role.name,
                //create_at: format(new Date(data.create_at), "MM/dd/yyyy HH:MM")
                create_at: format(
                  new Date(data.create_at),
                  "yyyy-MM-dd'T'HH:MM"
                ),
              }}
              validationSchema={Yup.object().shape({
                first_name: Yup.string().required("Fist name is required !"),
                last_name: Yup.string().required("Last name is required !"),
              })}
              onSubmit={(values) => {
                let tempData = {
                  id: data._id,
                  first_name: values.first_name,
                  last_name: values.last_name,
                };
                dispatch(Update_user_request(tempData));
                handleClose();
              }}
            >
              {(props) => {
                console.log(props.values.create_at);
                return (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          size="small"
                          autoComplete="fname"
                          name="first_name"
                          variant="outlined"
                          required
                          fullWidth
                          label="First Name"
                          value={props.values.first_name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.first_name && props.touched.first_name
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.first_name && props.touched.first_name
                              ? props.errors.first_name
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          size="small"
                          variant="outlined"
                          required
                          fullWidth
                          label="Last Name"
                          name="last_name"
                          autoComplete="lname"
                          value={props.values.last_name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.last_name && props.touched.last_name
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.last_name && props.touched.last_name
                              ? props.errors.last_name
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          disabled={true}
                          size="small"
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={props.values.email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.email && props.touched.email
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.email && props.touched.email
                              ? props.errors.email
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          size="small"
                          variant="outlined"
                          fullWidth
                          name="role_name"
                          label="Group"
                          disabled={true}
                          value={props.values.role_name}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="datetime-local"
                          size="small"
                          variant="outlined"
                          disabled={true}
                          fullWidth
                          name="create_at"
                          label="Create at"
                          value={props.values.create_at}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          fullWidth
                          style={{ textAlign: "center" }}
                          color="primary"
                          onClick={props.handleSubmit}
                        >
                          Update
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          fullWidth
                          style={{ textAlign: "center" }}
                          color="secondary"
                          onClick={handleClose}
                        >
                          Cancel
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

ModalEditUser.propTypes = {};

export default ModalEditUser;
