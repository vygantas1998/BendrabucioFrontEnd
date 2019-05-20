import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";

class WashingMachineCreate extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + getCookie("token")
            }
            
        }
        const response = await fetch(`${api}/washingmachines`, options)
        const res = response.json();
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = async(data) => {
        await this.postData(this.props.api, data);
        this.props.history.push("/washingmachines");
    }

    requiredValidation = (value) => {
        return value ? true : false;
    }

    render(){
        const fields = [
            {title: "Pavadinimas", field: "title", validation: this.requiredValidation}, 
            {title: "Aprašymas", field: "description"}, 
            {title: "Nuotrauka(URL)", field: "image_url", validation: this.requiredValidation}
        ];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="PRIDĖTI SKALBYKLĘ"/>
    }
};

export default withRouter(WashingMachineCreate);