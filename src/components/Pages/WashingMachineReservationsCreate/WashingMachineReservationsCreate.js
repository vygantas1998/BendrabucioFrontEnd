import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";
import { reservartionEndValidation, requiredValidation } from "../../../validation";

class WashingMachineReservationsCreate extends Component{
    postData = async(api, data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + getCookie("token")
            }
            
        }
        const response = await fetch(`${api}/washingmachinereservations`, options)
        const res = await response.json();
        if(res.error){
            console.error(res.error)
        }
    }

    onSubmit = (data) => {
        data.washing_machine_id = this.props.match.params.id;
        this.postData(this.props.api, data);
        this.props.history.push("/washingMachines");
    }

    render(){
        const fields = [
            {title: "Rezervacijos pradžia", field: "reservation_start_time", validation: requiredValidation},
            {title: "Rezervacijos pabaiga", field: "reservation_end_time", validation: reservartionEndValidation}];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="REZERVUOTI SKALBYKLĘ"/>
    }
};

export default withRouter(WashingMachineReservationsCreate);