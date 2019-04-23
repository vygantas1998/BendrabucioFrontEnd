import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";

class LogIn extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json"}
            
        }
        const response = await fetch(`${api}/logIn`, options)
        const res = response.json();
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = (data) => {
        //this.postData(this.props.api, data)
        //this.props.history.push("/logIn");
        this.props.login();
    }

    render(){
        const fields = [{title: "Prisijungimo vardas", field: "username"}, {title: "Slaptažodis", field: "password"}];
        return <Form fields={fields} submit={{text: "Prisijungti", func: this.onSubmit}} title="PRISIJUNGTI"/>
    }
};

export default withRouter(LogIn);