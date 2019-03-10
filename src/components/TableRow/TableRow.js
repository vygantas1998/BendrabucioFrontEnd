import React, { Component } from 'react';
import classes from './TableRow.module.css';

class TableRow extends Component {
    getColumns = () => {
        return Object.keys(this.props.data).map((res, index) => {
            return this.getField(this.props.data[res], this.props.headers[index]);
        })
    }
    getField(value, opts){
        if(typeof opts === "object" && opts.img){
            return <td><img src={value} alt="pic"/></td>
        } else {
            return <td>{value}</td>
        }
    }
    render(){
        console.log(this.props);
        return <tr>{this.getColumns()}</tr>;
    }
}

export default TableRow;