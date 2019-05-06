import React, { Component } from 'react';
//import classes from './WashingMachines.module.css';
import Table from '../../Table/Main/Main'
import { getOptions } from '../../../helpers';

class WashingMachines extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/washingmachines`, getOptions()).then(res => res.json()).then(res => {
            if(!res.error){
                this.setState({data: res});
            } else {
                console.log(res.error);
            }
        });
    }
    componentDidMount(){
        this.fetchData(this.props.api);
    }
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Pavadinimas", fieldName: "title"},
            {value: "Aprašymas", fieldName: "description"},
            {value: "Nuotrauka", fieldName: "image_url", img: true},
            {value: "Rezervacija", fieldName: "id", reservations: true},
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default WashingMachines;