import React, { Component } from 'react';
import classes from './Main.module.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import {Switch, Route} from "react-router-dom";
import WashingMachines from '../Pages/WashingMachines/WashingMachines';
import Showers from '../Pages/Showers/Showers';
import ShowerReservations from '../Pages/ShowerReservations/ShowerReservations';
import WashingMachineReservations from '../Pages/WashingMachineReservations/WashingMachineReservations';
import WashingMachineCreate from '../Pages/WashingMachineCreate/WashingMachineCreate';
import ShowerCreate from '../Pages/ShowerCreate/ShowerCreate';
import Register from '../Pages/Register/Register';
import Users from '../Pages/Users/Users';
import WashingMachineReservationsCreate from '../Pages/WashingMachineReservationsCreate/WashingMachineReservationsCreate';
import ShowerReservationsCreate from '../Pages/ShowerReservationsCreate/ShowerReservationsCreate';
class Main extends Component {
    state = {
        mobileSideBar: false
    }
    toggleMobileSideBar = () => {
        this.setState({
            ...this.state,
            mobileSideBar: !this.state.mobileSideBar
        })
    }
    render() {
        const api = this.props.api;
        return (
                <div className={classes.Main}>
                    <Header toggleMobileSideBar={this.toggleMobileSideBar} mobileSideBar={this.state.mobileSideBar}/>
                    <div className={classes.contentWithSideBar}>
                        <SideMenu mobileSideBar={this.state.mobileSideBar} logout={this.props.logout}/>
                        <div className={classes.content}>
                            <Switch>
                                <Route path="/washingMachines" exact component={() => <WashingMachines api={api}/>} />
                                <Route path="/showers" exact component={() => <Showers api={api}/>} />
                                <Route path="/reservations/shower" exact component={() => <ShowerReservations api={api}/>} />
                                <Route path="/washingMachines/create" exact component={() => <WashingMachineCreate api={api}/>} />
                                <Route path="/showers/create" exact component={() => <ShowerCreate api={api}/>} />
                                <Route path="/reservations/washingMachine" exact component={() => <WashingMachineReservations api={api}/>} />
                                <Route path="/users/register" exact component={() => <Register api={api}/>} />
                                <Route path="/users" exact component={() => <Users api={api}/>} />
                                <Route path="/washingMachines/reservation/:id" exact component={() => <WashingMachineReservationsCreate api={api}/>} />
                                <Route path="/showers/reservation/:id" exact component={() => <ShowerReservationsCreate api={api}/>} />
                            </Switch>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Main;