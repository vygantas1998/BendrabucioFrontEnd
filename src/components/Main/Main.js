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
        const api = "http://localhost:56171"
        return (
            
                <div className={classes.Main}>
                    <Header toggleMobileSideBar={this.toggleMobileSideBar} mobileSideBar={this.state.mobileSideBar}/>
                    <div className={classes.contentWithSideBar}>
                        <SideMenu mobileSideBar={this.state.mobileSideBar}/>
                        <div className={classes.content}>
                            <Switch>
                                <Route exact path="/" component={() => <div></div>}/>
                                <Route path="/washingMachines" exact component={() => <WashingMachines api={api}/>} />
                                <Route path="/showers" exact component={() => <Showers api={api}/>} />
                                <Route path="/reservations/shower" exact component={() => <ShowerReservations api={api}/>} />
                                <Route path="/washingMachines/create" exact component={() => <WashingMachineCreate api={api}/>} />
                                <Route path="/showers/create" exact component={() => <ShowerCreate api={api}/>} />
                                <Route path="/reservations/washingMachine" exact component={() => <WashingMachineReservations api={api}/>} />
                            </Switch>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Main;