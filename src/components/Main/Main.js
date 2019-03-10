import React, { Component } from 'react';
import classes from './Main.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../Table/Table'
class Main extends Component {
    render() {
        return (
            <div className={classes.Main}>
                <Table data={this.props.store.washingMachines.edges} header={["Pavadinimas", "Aprašymas", {value: "Nuotrauka", img: true}]}/>
            </div>
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
                        image_url
                    }
                }
            }
        }
    `
});