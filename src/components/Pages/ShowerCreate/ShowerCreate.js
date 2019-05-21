import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";
import { requiredValidation } from "../../../validation";

class ShowerCreate extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + getCookie("token")
            }
            
        }
        const response = await fetch(`${api}/showers`, options)
        const res = response.json();
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = async(data) => {
        await this.postData(this.props.api, data);
        this.props.history.push("/showers");
    }

    render(){
        const fields = [
            {title: "Tipas", field: "type", validation: requiredValidation}, 
            {title: "Aprašymas", field: "description"}
        ];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="PRIDĖTI DUŠĄ"/>
    }
};

export default withRouter(ShowerCreate);