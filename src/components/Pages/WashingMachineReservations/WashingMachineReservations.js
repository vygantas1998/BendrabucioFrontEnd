import React, { Component } from 'react';
//import classes from './WashingMachineReservations.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../../Table/Main/Main'

class WashingMachineReservations extends Component {
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Skalbimo mašinos numeris", fieldName: "washing_machine_id"},
            {value: "Rezervacijos pradžia", fieldName: "reservation_start_time", time: true},
            {value: "Rezervacijos pabaiga", fieldName: "reservation_end_time", time: true}
        ]
        return <Table data={this.props.store.washingMachineReservations.edges} header={header}/>;
    }
}

export default createFragmentContainer(WashingMachineReservations, {
    store: graphql`
        fragment WashingMachineReservations_store on Store{
            washingMachineReservations{
                edges{
                    node{
                        washing_machine_id
                        reservation_start_time
                        reservation_end_time
                    }
                }
            }
        }
    `
});