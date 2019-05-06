import React, { Component } from 'react';
//import classes from './Showers.module.css';
import Table from '../../Table/Main/Main'
import { getOptions } from '../../../helpers';

class Showers extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/showers`, getOptions()).then(res => res.json()).then(res => {
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
            {value: "Tipas", fieldName: "type"},
            {value: "Aprašymas", fieldName: "description"},
            {value: "Rezervacija", fieldName: "id", reservations: true}
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default Showers;