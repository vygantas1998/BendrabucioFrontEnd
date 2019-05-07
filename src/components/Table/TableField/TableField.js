import React, { Component } from 'react';
import classes from './TableField.module.css';
import moment from 'moment';
import {withRouter} from 'react-router-dom';
import 'moment/locale/lt';
import { getOptions } from '../../../helpers';

class TableField extends Component {

    state = {
        buttonshow: true,
        reservedTill: ""
    }

    _isMounted = false;

    onClick = (id) => {
        this.props.history.push(this.props.history.location.pathname + "/reservation/" + id);
    }

    onRemove = (id) => {
        const header = {...getOptions(),method:"DELETE"};
        let apiEndPoint = this.props.history.location.pathname.toLowerCase();
        if(this.props.apiEndPoint){
            apiEndPoint = "/" + this.props.apiEndPoint;
        }
        fetch(`http://localhost:56171${apiEndPoint}/${id}`, header).then(res => res.text()).then(res => {
            if(!res.error){
                this.props.removeData();
            } else {
                console.log(res.error);
            }
        });
    }

    reservationFetch = async()=>{
        const page = this.props.history.location.pathname.toLowerCase().slice(0,-1);
        let idfield = page.substr(1);
        if(idfield === "washingmachine"){
            idfield = "washing_machine";
        }
        const url = `http://localhost:56171${page}reservations`;
        const filter = `filter[where][${idfield}_id]=${this.props.value}&filter[order]=reservation_end_time DESC&filter[limit]=1`;
        
        const response = await fetch(`${url}?${filter}`, getOptions());
        const res = await response.json();

        if(res.length === 1){
            const now = new Date().getTime();
            const from = new Date(res[0].reservation_start_time).getTime();
            const to = new Date(res[0].reservation_end_time).getTime();
                
            if(from <= now && now < to){
                if(this._isMounted){
                    this.setState({buttonshow: false, reservedTill: moment(res[0].reservation_end_time).fromNow()});
                }
            }
        }
    }

    componentDidMount(){
        this._isMounted = true;
        if(this.props.opts.reservations){
            this.reservationFetch();
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
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
                if(this.state.buttonshow){
                    inner = <button onClick={() => this.onClick(this.props.value)} className={classes.button}><i>Rezervuoti</i></button>
                }
                else
                   inner = <div className={classes.reserved}> <i>Atsilaisvins {this.state.reservedTill}</i> </div>;
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