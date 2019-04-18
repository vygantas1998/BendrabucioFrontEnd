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
        console.log(res)
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = (data) => {
        console.log(data)
        this.postData(this.props.api, data)
        this.props.history.push("/users");
    }

    render(){
        const fields = [
            {title: "Vartotojo vardas", field: "username"},
            {title: "Slaptažodis", field: "password"},
            {title: "Kambario Nr.", field: "room_no"}, 
            {title: "El. pašto adresas", field: "email"},
            {title: "Rolė", field: "role"}]
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="Registracija"/>
    }
};

export default withRouter(Register);