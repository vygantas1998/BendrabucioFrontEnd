import React, { Component } from 'react';
//import classes from './ShowerReservations.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../../Table/Main/Main'

class ShowerReservations extends Component {
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Dušo numeris", fieldName: "shower_id"},
            {value: "Rezervacijos pradžia", fieldName: "reservation_start_time", time: true},
            {value: "Rezervacijos pabaiga", fieldName: "reservation_end_time", time: true}
        ]
        return <Table data={this.props.store.showerReservations.edges} header={header}/>;
    }
}

export default createFragmentContainer(ShowerReservations, {
    store: graphql`
        fragment ShowerReservations_store on Store{
            showerReservations{
                edges{
                    node{
                        shower_id
                        reservation_start_time
                        reservation_end_time
                    }
                }
            }
        }
    `
});