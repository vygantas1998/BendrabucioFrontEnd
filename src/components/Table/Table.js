import React, { Component } from 'react';
import classes from './Table.module.css';
import TableRow from '../TableRow/TableRow';

class Table extends Component {
    state = {
        headerKeys: Object.keys(this.props.data[0].node),
        headerText: this.props.header || Object.keys(this.props.data[0].node)
    }
    getHeader = () => {
        const columns = this.state.headerText.map((r,i) => {
            if(typeof r === "object"){
                r = r.value;
            }
            return <td key={i}>{r}</td>
        })
        return <tr>{columns}</tr>;
    }
    getLines = () => {
        const lines = this.props.data.map((res, index) => {
            return <TableRow key={index} data={res.node} headers={this.state.headerText}/>
        })
        return lines;
    }
    render() {
        return (
        <div>
            <table className={classes.table}>
                <thead>
                    {this.getHeader()}
                </thead>
                <tbody>
                    {this.getLines()}
                </tbody>
            </table>
        </div>
        );
    }
}

export default Table;
