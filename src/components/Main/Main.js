import React, { Component } from 'react';
import classes from './Main.module.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WashingMachines from '../Pages/WashingMachines/WashingMachines';
import Showers from '../Pages/Showers/Showers';
import ShowerReservations from '../Pages/ShowerReservations/ShowerReservations';
import WashingMachineReservations from '../Pages/WashingMachineReservations/WashingMachineReservations';
import WashingMachineCreate from '../WashingMachineCreate/WashingMachineCreate';
import ShowerCreate from '../ShowerCreate/ShowerCreate';
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
        return (
            <Router>
                <div className={classes.Main}>
                    <Header toggleMobileSideBar={this.toggleMobileSideBar} mobileSideBar={this.state.mobileSideBar}/>
                    <div className={classes.contentWithSideBar}>
                        <SideMenu mobileSideBar={this.state.mobileSideBar}/>
                        <div className={classes.content}>
                            <Switch>
                                <Route exact path="/" component={() => <div></div>}/>
                                <Route path="/washingMachines" exact component={() => <WashingMachines store={this.props.store}/>} />
                                <Route path="/showers" exact component={() => <Showers store={this.props.store}/>} />
                                <Route path="/reservations/shower" exact component={() => <ShowerReservations store={this.props.store}/>} />
                                <Route path="/washingMachines/create" exact component={WashingMachineCreate} />
                                <Route path="/showers/create" exact component={ShowerCreate} />
                                <Route path="/reservations/washingMachine" exact component={() => <WashingMachineReservations store={this.props.store}/>} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Main;