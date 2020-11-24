import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { register_request } from "../../redux/actionCreators/AuthenActionCreator";
import { getAllRoles } from "../../redux/actionCreators/RoleActionCreator";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    marginTop: "10px",
  },

}));

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.Roles.roles);
  useEffect(() => {
    dispatch(getAllRoles());
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",

            password: "",
            confirm_password: "",
            role_id: "",
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().required("Fist name is required !"),
            last_name: Yup.string().required("Last name is required !"),
            email: Yup.string()
              .required("Email is required !")
              .email("Email is not valid !"),
            password: Yup.string()
              .required("Password is required !")
              .min(6, "Minimum is 6 characters !")
              .max(16, "Maximum is 16 characters !"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("password")], "Password is not match !")
              .required("Confirm password is required !"),

            role_id: Yup.string().required("Role is required !"),
          })}
          onSubmit={(values) => {
            dispatch(register_request(values));
          }}
        >
          {(props) => {
            return (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
                        props.errors.email && props.touched.email ? true : false
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
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.password && props.touched.password
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.password && props.touched.password
                          ? props.errors.password
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="confirm_password"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      value={props.values.confirm_password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.confirm_password &&
                        props.touched.confirm_password
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.confirm_password &&
                        props.touched.confirm_password
                          ? props.errors.confirm_password
                          : ""
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                  
                      fullWidth
                      
                      error={
                        props.errors.role_id && props.touched.role_id
                          ? true
                          : false
                      }
                      className={classes.formControl}
                    >
                      <InputLabel>Groups</InputLabel>
                     
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        value={props.values.role_id}
                        onChange={props.handleChange}
                        name="role_id"
                      >
                        {roles.map((e, i) => (
                          <MenuItem key={i} value={e._id}>
                            {e.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        {props.errors.role_id && props.touched.role_id
                          ? props.errors.role_id
                          : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/auth/login" component={RouterLink}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
