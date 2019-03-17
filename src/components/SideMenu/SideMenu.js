import React, { Component } from 'react';
import classes from './SideMenu.module.css';
import { Link } from "react-router-dom";

class SideMenu extends Component {
    render(){
        const active = this.props.mobileSideBar ? " " + classes["nav-active"] : ""
        return  <div className={classes.wrapper + active}>
                    <ul className={classes["nav-links"]}>
                        <li><Link to="/">Pagrindinis</Link></li>
                        <li><Link to="/washingMachines">Skalbyklės</Link></li>
                        <li><Link to="/showers">Dušai</Link></li>
                        <li><Link to="/reservations">(Admin) Rezervacijos</Link></li>
                    </ul>
                </div>;
    }
}

export default SideMenu;