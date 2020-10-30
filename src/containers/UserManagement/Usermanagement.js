import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./Header/Header";
import UserList from "./UserList/UserList";
import { useState } from "react";
import ModalEditUser from "./ModalEditUser/ModalEditUser";

Usermanagement.propTypes = {};
var data1 = {
  _id: "5f69bb51e0628637dc10e203",
  status: "active",
  first_name: "dang",
  last_name: "xuan",
  email: "dangxuanthangqt97@gmail.com",
  role_id: "5f5dde524d491b6886ec2bde",
  create_at: "2020-09-22T08:52:33.308Z",
  __v: 0,
  role: {
    _id: "5f5dde524d491b6886ec2bde",
    name: "Tổ cắt",
    description: "cắt vui vui",
  },
};
function Usermanagement(props) {
  const [data, setData] = useState(data1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDataModal = (data) => {
    setData(data);
  };
  return (
    <Container>
      <Header></Header>
      <UserList
        handleOpen={handleOpen}
        handleDataModal={handleDataModal}
      ></UserList>
      <ModalEditUser
        handleClose={handleClose}
        open={open}
        data={data}
      ></ModalEditUser>
    </Container>
  );
}

export default Usermanagement;
