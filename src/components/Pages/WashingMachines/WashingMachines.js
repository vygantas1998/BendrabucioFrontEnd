import React, { Component } from 'react';
//import classes from './WashingMachines.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../../Table/Main/Main'

class WashingMachines extends Component {
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Pavadinimas", fieldName: "title"},
            {value: "Aprašymas", fieldName: "description"},
            {value: "Nuotrauka", fieldName: "image_url", img: true}
        ]
        return <Table data={this.props.store.washingMachines.edges} header={header}/>;
    }
}

export default createFragmentContainer(WashingMachines, {
    store: graphql`
        fragment WashingMachines_store on Store{
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