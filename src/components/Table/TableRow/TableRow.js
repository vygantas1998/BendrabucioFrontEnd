import React, { Component } from 'react';
import TableField from '../TableField/TableField';
import classes from './TableRow.module.css';

class TableRow extends Component {
    getColumns = () => {
        const keys = this.props.headers || this.props.data;
        return keys.map((res, index) => {
            const elem = res.fieldName || index;
            let value = this.props.data[elem];
            if(this.props.header){
                value = res.value;
                res = {};
            }
            return <TableField key={index} rowNumber={this.props.rowNumber} value={value} opts={res} header={this.props.header}/>;
        })
    }
    render(){
        let className = this.props.className ? this.props.className + " " : "" + classes.tableRow;
        return <tr className={className}>{this.getColumns()}</tr>;
    }
}

export default TableRow;