import React, { Component } from 'react';
import classes from './SideMenu.module.css';
import { Link } from "react-router-dom";
import { isAdminRole } from '../../helpers';

class SideMenu extends Component {
    render(){
        const active = this.props.mobileSideBar ? " " + classes["nav-active"] : ""
        const links = 
            <ul className={classes["nav-links"]}>
                <li><Link to="/">Pagrindinis</Link></li>
                <li><Link to="/washingMachines">Skalbyklės</Link></li>
                <li><Link to="/showers">Dušai</Link></li>
            </ul>;
        const adminLinks = 
            <ul className={classes["nav-links"]}>
                <li><Link to="/reservations/shower">(Admin) Rezervacijos Dušai</Link></li>
                <li><Link to="/reservations/washingMachine">(Admin) Rezervacijos Skalbyklės</Link></li>
                <li><Link to="/washingMachines/create">(Admin) Prideti skalbyklę</Link></li>
                <li><Link to="/showers/create">(Admin) Prideti dušą</Link></li>
                <li><Link to="/users">(Admin) Vartotojai</Link></li>
                <li><Link to="/users/register">(Admin) Registracija</Link></li>
            </ul>
        const isAdmin = isAdminRole();
        return  <div className={classes.wrapper + active}>
                    <ul className={classes["nav-links"]}>
                        {links}
                        {isAdmin ? adminLinks : ""}
                        <li><button onClick={this.props.logout}>Atsijungti</button></li>
                    </ul>
                </div>;
    }
}

export default SideMenu;