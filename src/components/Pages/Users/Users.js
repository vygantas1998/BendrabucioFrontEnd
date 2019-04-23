import React, { Component } from 'react';
//import classes from './Showers.module.css';
import Table from '../../Table/Main/Main'
import { getOptions } from '../../../helpers';

class Users extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/users`, getOptions()).then(res => res.json()).then(res => {
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
            {value: "Vartotojo vardas", fieldName: "username"},
            {value: "Kambario numeris", fieldName: "room_no"},
            {value: "El. paštas", fieldName: "email"},
            {value: "Rolė", fieldName: "role"},
            
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default Users;