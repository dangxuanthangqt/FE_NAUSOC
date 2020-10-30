import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ViewListIcon from "@material-ui/icons/ViewList";
import React from "react";
import history from "../../../Helpers/history";

function NavAdmin(props) {
  const handleNav = (data) => {
    history.push(data);
  };
  return (
    <div>
      <ListItem button onClick={()=>{handleNav("/management/daily-reports-admin")}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Daily-reports" />
      </ListItem>
      <ListItem button   onClick={()=>{handleNav("/management/users")}}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        
      </ListItem>
      <ListItem button onClick={()=>handleNav("/management/groups")}>
        <ListItemIcon>
          <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>
      <ListItem button onClick={()=>handleNav("/management/profile-admin")}>
        <ListItemIcon>
          <AccountBoxIcon></AccountBoxIcon>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </div>
  );
}

export default NavAdmin;
