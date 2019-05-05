import React, { Component } from 'react';
import classes from './TableField.module.css';
import moment from 'moment';
import {withRouter} from 'react-router-dom';
import 'moment/locale/lt';

class TableField extends Component {

    onClick = (id) => {
        console.log(id);
        this.props.history.push(this.props.history.location.pathname + "/reservation/" + id);
    }

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
                inner = moment(this.props.value).subtract(1, 'days').subtract(2, 'hours').format('LLL');
            }
            if(this.props.opts.reservations){
                inner = <button onClick={() => this.onClick(this.props.value)} className={classes.button}><i>Rezervuoti</i></button>
            }
        }
        return <td className={className}>{inner}</td>
    }
}

export default withRouter(TableField);