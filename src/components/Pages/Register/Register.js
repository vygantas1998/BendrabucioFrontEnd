import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";

class Register extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json"}
            
        }
        const response = await fetch(`${api}/users`, options)
        const res = response.json();
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = (data) => {
        this.postData(this.props.api, data)
        this.props.history.push("/users");
    }

    render(){
        const fields = [{title: "Vardas", field: "firstName"}, {title: "Pavarde", field: "lastName"},
    {title: "Kambario Nr.", field: "roomNum"}, {title: "El. pašto adresas", field: "address"},
     {title: "Slaptažodis", field: "password"},{title: "Patvirtinti slaptažodį", field: "confirmPassword"}];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="Registracija"/>
    }
};

export default withRouter(Register);