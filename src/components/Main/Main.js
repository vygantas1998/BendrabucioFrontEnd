import React, { Component } from 'react';
import classes from './Main.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../Table/Main/Main'
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        const header = [
            {value: "Nr.", inc: true},
            {value: "Pavadinimas", fieldName: "title"},
            {value: "Aprašymas", fieldName: "description"},
            {value: "Nuotrauka", fieldName: "image_url", img: true}
        ]
        const empty = <div></div>;
        const table = <Table data={this.props.store.washingMachines.edges} header={header}/>
        return (
            <Router>
                <div className={classes.Main}>
                    <Header toggleMobileSideBar={this.toggleMobileSideBar} mobileSideBar={this.state.mobileSideBar}/>
                    <div className={classes.contentWithSideBar}>
                        <SideMenu mobileSideBar={this.state.mobileSideBar}/>
                        <div className={classes.content}>
                            <Switch>
                                <Route exact path="/" component={() => empty}/>
                                <Route path="/washingMachines" component={() => table} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default createFragmentContainer(Main, {
    store: graphql`
        fragment Main_store on Store{
            washingMachines{
                edges{
                    node{
                        title
                        description
                        image_url
                    }
                }
            }
        }
    `
});