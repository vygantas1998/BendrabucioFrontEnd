import React, { Component } from 'react';
import classes from './TableField.module.css';
import moment from 'moment';
import 'moment/locale/lt';

class TableField extends Component {
    render(){
        let className = this.props.className ? this.props.className + " " : "" + classes.tableField;
        if(this.props.header){
            className += " " + classes.tableHeader;
        }
        let inner = this.props.value;
        if(typeof this.props.opts === "object"){
            if(this.props.opts.img){
                inner = <img src={this.props.value} alt="pic"/>
            }
            if(this.props.opts.inc){
                inner = this.props.rowNumber+1;
            } 
            if(this.props.opts.time){
                moment.locale("lt");
                inner = moment(parseInt(this.props.value)).subtract(1, 'days').subtract(2, 'hours').calendar();
            }
        }
        return <td className={className}>{inner}</td>
    }
}

export default TableField;