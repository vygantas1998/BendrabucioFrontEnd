import React, { Component } from 'react';
import classes from './Main.module.css';
import TableRow from '../TableRow/TableRow';

class Main extends Component {
    state = {
        headerKeys: this.props.data.length > 0 ? Object.keys(this.props.data[0]) : [],
        headerText: this.props.header,
        data: this.props.data
    }
    getHeader = () => {
        return <TableRow data={this.state.headerText} header/>;
    }
    getLines = () => {
        const lines = this.state.data.map((res, index) => {
            return <TableRow removeData={() => this.removeData(index)} key={index} data={res} rowNumber={index} headers={this.state.headerText} apiEndPoint={this.props.apiEndPoint}/>
        })
        return lines;
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            ...this.state,
            data: nextProps.data
        })
    }
    removeData = (line) => {
        let tempdata = [...this.state.data];
        tempdata.splice(line, 1);
        this.setState({
            ...this.state,
            headerKeys: tempdata.length > 0 ? Object.keys(tempdata[0]) : [],
            data: tempdata
        })
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
