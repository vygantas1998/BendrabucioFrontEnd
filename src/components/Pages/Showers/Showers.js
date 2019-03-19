import React, { Component } from 'react';
//import classes from './Showers.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../../Table/Main/Main'

class Showers extends Component {
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Tipas", fieldName: "type"},
            {value: "Aprašymas", fieldName: "description"}
        ]
        return <Table data={this.props.store.showers.edges} header={header}/>;
    }
}

export default createFragmentContainer(Showers, {
    store: graphql`
        fragment Showers_store on Store{
            showers{
                edges{
                    node{
                        type
                        description
                    }
                }
            }
        }
    `
});