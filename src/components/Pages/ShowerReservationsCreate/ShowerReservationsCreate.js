import React, {Component} from "react";
import Form from "../../Form/Form";
import {withRouter} from "react-router-dom";
import { getCookie } from "../../../helpers";

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
    }

    onSubmit = (data) => {
        data.shower_id = this.props.match.params.id;
        this.postData(this.props.api, data);
        this.props.history.push("/showers");
    }

    requiredValidation = (value) => {
        return value ? true : false;
    }

    reservartionStartValidation = (value) => {
        if(value){
            const now = new Date();
            return new Date(value).getMilliseconds() > now.getMilliseconds();
        }
        return false;
    }

    render(){
        console.log(new Date("1997-05-06"))
        const fields = [
            {title: "Rezervacijos pradžia", field: "reservation_start_time", validation: this.reservartionStartValidation},
            {title: "Rezervacijos pabaiga", field: "reservation_end_time", validation: this.requiredValidation}
        ];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="REZERVUOTI DUŠĄ"/>
    }
};

export default withRouter(ShowerReservationsCreate);