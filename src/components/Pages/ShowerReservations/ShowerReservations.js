import React, { Component } from 'react';
//import classes from './ShowerReservations.module.css';
import Table from '../../Table/Main/Main'

class ShowerReservations extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/showerreservations`).then(res => res.json()).then(res => {
            this.setState({data: res});
        });
    }
    componentDidMount(){
        this.fetchData(this.props.api);
    }
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Dušo numeris", fieldName: "shower_id"},
            {value: "Rezervacijos pradžia", fieldName: "reservation_start_time", time: true},
            {value: "Rezervacijos pabaiga", fieldName: "reservation_end_time", time: true}
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default ShowerReservations;