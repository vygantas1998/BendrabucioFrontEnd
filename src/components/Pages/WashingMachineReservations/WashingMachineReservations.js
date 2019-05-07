import React, { Component } from 'react';
//import classes from './WashingMachineReservations.module.css';
import Table from '../../Table/Main/Main'
import { getOptions } from '../../../helpers';

class WashingMachineReservations extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/washingmachinereservations`, getOptions()).then(res => res.json()).then(res => {
            this.setState({data: res});
        });
    }
    componentDidMount(){
        this.fetchData(this.props.api);
    }
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Skalbimo mašinos numeris", fieldName: "washing_machine_id"},
            {value: "Rezervacijos pradžia", fieldName: "reservation_start_time", time: true},
            {value: "Rezervacijos pabaiga", fieldName: "reservation_end_time", time: true},
            {value: "Ištrinti", fieldName: "id", remove: true}
        ]
        return <Table data={this.state.data} header={header} apiEndPoint="washingmachinereservations"/>;
    }
}

export default WashingMachineReservations;