import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
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
import { Create_mistake_request, Edit_mistake_request } from "../../../redux/actionCreators/MistakeActionCreator";


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
function ModalEditMistake(props) {
  const { dataEdit, handleClose, open } = props;
  
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
            EDIT MISTAKE
          </Typography>
          <CardContent>
            <Formik
              initialValues={{
                name: dataEdit.name,
                description: dataEdit.description,
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required !"),
                description: Yup.string().required("Description is required !"),
              })}
              onSubmit={(values) => {
                dispatch(Edit_mistake_request({
                    ...values,
                    id : dataEdit._id
                }));
                handleClose();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          
                          size="small"
                          autoComplete="fname"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          label="Name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.name && props.touched.name
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.name && props.touched.name
                              ? props.errors.name
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
                          label="Description"
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

ModalEditMistake.propTypes = {};

export default ModalEditMistake;
