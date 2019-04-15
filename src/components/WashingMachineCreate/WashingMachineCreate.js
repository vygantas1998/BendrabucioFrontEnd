import React, {Component} from "react";
import Form from "../Form/Form";
import commit from "../../mutations/AddWashingMachine";
import { modernEnvironment } from "../App/App";

class WashingMachineCreate extends Component{
    state = {
    }

    onSubmit(data){
        commit(modernEnvironment, data);
    }

    render(){
        const fields = [{title: "Pavadinimas", field: "title"}, {title: "Aprašymas", field: "description"}, {title: "Nuotrauka(URL)", field: "image_url"}];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="PRIDĖTI SKALBYKLĘ"/>
    }
};

export default WashingMachineCreate;