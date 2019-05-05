import React, { Component } from 'react';
import classes from './TableField.module.css';
import moment from 'moment';
import {withRouter} from 'react-router-dom';
import 'moment/locale/lt';
import { getOptions } from '../../../helpers';

class TableField extends Component {

    onClick = (id) => {
        this.props.history.push(this.props.history.location.pathname + "/reservation/" + id);
    }

    onRemove = (id) => {
        const header = {...getOptions(),method:"DELETE"};
         fetch(`http://localhost:56171${this.props.history.location.pathname.toLowerCase()}/${id}`, header).then(res => res.json()).then(res => {
            if(!res.error){
            } else {
                console.log(res.error);
            }
        });
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
                inner = moment(this.props.value).format('LLL');
            }
            if(this.props.opts.reservations){
                const buttonshow = false;
                if(buttonshow){
                    inner = <button onClick={() => this.onClick(this.props.value)} className={classes.button}><i>Rezervuoti</i></button>
                }
                else
                   inner = <div className={classes.reserved}> <i>Rezervuota iki </i> </div>;
            }
            if(this.props.opts.remove)
            {
                inner = <button onClick={() => this.onRemove(this.props.value)} className={classes.button}>X</button>;
            }
        }
        return <td className={className}>{inner}</td>
    }
}

export default withRouter(TableField);