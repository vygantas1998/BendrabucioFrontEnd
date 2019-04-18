import React, { Component } from 'react';
//import classes from './WashingMachines.module.css';
import Table from '../../Table/Main/Main'

class WashingMachines extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/washingmachines`).then(res => res.json()).then(res => {
            this.setState({data: res});
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
            {value: "Nuotrauka", fieldName: "image_url", img: true}
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default WashingMachines;