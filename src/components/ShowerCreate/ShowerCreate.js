import React, {Component} from "react";
import Form from "../Form/Form";
import commit from "../../mutations/AddShower";
import { modernEnvironment } from "../App/App";

class ShowerCreate extends Component{
    state = {
    }

    onSubmit = (data) => {
        commit(modernEnvironment, data);
    }

    render(){
        const fields = [{title: "Tipas", field: "type"}, {title: "Aprašymas", field: "description"}];
        return <Form fields={fields} submit={{text: "Patvirtinti", func: this.onSubmit}} title="PRIDĖTI DUŠĄ"/>
    }
};

export default ShowerCreate;