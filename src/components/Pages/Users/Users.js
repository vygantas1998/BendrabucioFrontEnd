import React, { Component } from 'react';
//import classes from './Showers.module.css';
import Table from '../../Table/Main/Main'

class Users extends Component {
    state = {
        data: []
    }
    fetchData = (api) => {
        fetch(`${api}/users`).then(res => res.json()).then(res => {
            this.setState({data: res});
        });
    }
    componentDidMount(){
        this.fetchData(this.props.api);
    }
    render(){
        const header = [
            {value: "Vardas", inc: true},
            {value: "Pavarde", fieldName: "lastName"},
            {value: "Kambario Nr.", fieldName: "roomNum"},
            {value: "Pašto adresas", fieldName: "address"}
        ]
        return <Table data={this.state.data} header={header}/>;
    }
}

export default Users;