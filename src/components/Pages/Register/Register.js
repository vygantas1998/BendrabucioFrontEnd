import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";

class Register extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + getCookie("token")
            }
            
        }
        const response = await fetch(`${api}/users`, options)
        const res = await response.json();
        if(res.error){
            console.error(res.error)
        }
        return res;
    }

    onSubmit = (data) => {
        data.room_no = Number(data.room_no);
        this.postData(this.props.api, data)
        this.props.history.push("/users");
    }

    render(){
        const fields = [
            {title: "Vartotojo vardas", field: "username"},
            {title: "Slaptažodis", field: "password", attr: {type:"password"}},
            {title: "Kambario Nr.", field: "room_no", attr: {type:"number"}}, 
            {title: "El. pašto adresas", field: "email"},
            {title: "Rolė", field: "role"}]
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="Registracija"/>
    }
};

export default withRouter(Register);