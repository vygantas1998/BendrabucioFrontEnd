import React, { Component } from 'react';
import classes from './Main.module.css';
import TableRow from '../TableRow/TableRow';

class Main extends Component {
    state = {
        headerKeys: this.props.data.length > 0 ? Object.keys(this.props.data[0]) : [],
        headerText: this.props.header // || this.props.data.length > 0 ? Object.keys(this.props.data[0]) : 
    }
    getHeader = () => {
        return <TableRow data={this.state.headerText} header/>;
    }
    getLines = () => {
        const lines = this.props.data.map((res, index) => {
            return <TableRow key={index} data={res} rowNumber={index} headers={this.state.headerText}/>
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

export default Main;
