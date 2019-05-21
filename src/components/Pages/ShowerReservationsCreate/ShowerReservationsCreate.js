import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";
import { requiredValidation, reservartionEndValidation } from "../../../validation";

class ShowerReservationsCreate extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + getCookie("token")
            }
            
        }
        const response = await fetch(`${api}//showerreservations`, options)
        const res = await response.json();
        console.log(res);
        if(res.error){
            console.error(res.error)
        }
        return res;
    }

    onSubmit = (data) => {
        data.shower_id = this.props.match.params.id;
        this.postData(this.props.api, data).then(res => {
            if(res){
                this.props.history.push("/showers");
            }
        });
    }

    render(){
        const fields = [
            {title: "Rezervacijos pradžia", field: "reservation_start_time", validation: requiredValidation},
            {title: "Rezervacijos pabaiga", field: "reservation_end_time", validation: reservartionEndValidation}
        ];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="REZERVUOTI DUŠĄ"/>
    }
};

export default withRouter(ShowerReservationsCreate);