import React, { Component } from 'react';
import classes from './Main.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../Table/Table'
class Main extends Component {
    render() {
        return (
            <div className={classes.Main}>
                <Table/>
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
                        id
                        title
                        image_url
                    }
                }
            }
        }
    `
});