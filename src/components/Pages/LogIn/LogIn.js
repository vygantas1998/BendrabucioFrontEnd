import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import Header from '../../Header/Header.js';
import classes from './LogIn.module.css';
import base64 from 'base-64';
import { getCookie } from "../../../helpers";

class LogIn extends Component{
    state = {
        error: ""
    }
    postData = async(api, data) => {
        const options = {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Basic " + base64.encode(data.username + ":" + data.password)
            }
        }
        const response = await fetch(`${api}/login`, options);
        const res = await response.json();
        if(res.error){
            this.setState({error: res.error.name})
        }
        return res;
    }

    onSubmit = (data) => {
        this.postData(this.props.api, data).then(res => {
            if(res.token){
                document.cookie = `token=${res.token};path=/`
            }
            if(!res.error){
                this.props.login();
            }
        })
    }
    componentDidMount(){
        if(getCookie("token")){
            this.props.login();
        }
    }
    render(){
        const fields = [{title: "Prisijungimo vardas", field: "username"}, {title: "Slaptažodis", field: "password", attr: {type:"password"}}];
        return  <div className={classes.main}>
                    <Header/>
                    <div className={classes.form}>
                        <Form fields={fields} submit={{text: "Prisijungti", func: this.onSubmit}} title="PRISIJUNGTI" error={this.state.error}/>
                    </div>
                </div>;
    }
};

export default withRouter(LogIn);