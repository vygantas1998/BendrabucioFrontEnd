import React, { Component } from 'react';
import classes from './TableField.module.css';

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
        }
        return <td className={className}>{inner}</td>
    }
}

export default TableField;