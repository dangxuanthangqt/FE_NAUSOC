import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ViewListIcon from "@material-ui/icons/ViewList";
import history from "../../../Helpers/history";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
NavCommon.propTypes = {};

function NavCommon(props) {
  const handleNav =(data)=>{
    history.push(data)
  }
  return (
    <div>
      <ListItem button onClick={()=>handleNav("/management/daily-reports")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Daily Reports" />
      </ListItem>
      <ListItem button onClick={()=>handleNav("/management/mistakes")}>
        <ListItemIcon>
          <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="Mistakes" />
      </ListItem>
      <ListItem button onClick={()=>handleNav("/management/profile")}>
        <ListItemIcon>
          <AccountBoxIcon></AccountBoxIcon>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </div>
  );
}

export default NavCommon;
