import React, { Component } from 'react';
import classes from './Main.module.css';
import TableRow from '../TableRow/TableRow';

class Main extends Component {
    state = {
        headerKeys: Object.keys(this.props.data[0].node),
        headerText: this.props.header || Object.keys(this.props.data[0].node)
    }
    getHeader = () => {
        return <TableRow data={this.state.headerText} header/>;
    }
    getLines = () => {
        const lines = this.props.data.map((res, index) => {
            return <TableRow key={index} data={res.node} rowNumber={index} headers={this.state.headerText}/>
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
