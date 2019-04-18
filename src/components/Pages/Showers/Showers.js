import React, { Component } from 'react';
//import classes from './Showers.module.css';
import Table from '../../Table/Main/Main'

class Showers extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/showers`).then(res => res.json()).then(res => {
            this.setState({data: res});
        });
    }
    componentDidMount(){
        this.fetchData(this.props.api);
    }
    render(){
        const header = [
            {value: "Nr.", inc: true},
            {value: "Tipas", fieldName: "type"},
            {value: "Aprašymas", fieldName: "description"}
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default Showers;