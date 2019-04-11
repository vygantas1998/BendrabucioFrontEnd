import React, {Component} from "react";
import classes from "./WashingMachineCreate.module.css"

class WashingMachineCreate extends Component{
    state = {
        title: "LABAS",
        description: "",
        image_url: ""
    }

    onChange = (event, field) => {
        this.setState({
            ...this.state, 
            [field]: event.target.value
        })
    }

    onSubmit = () => {
        console.log(this.state);
    }


    render(){

        return <div className={classes.form}>
            <input onChange={(event)=>this.onChange(event,"title")} value={this.state.title}/>
            <input onChange={(event)=>this.onChange(event,"description")} value={this.state.description}/>
            <input onChange={(event)=>this.onChange(event,"image_url")} value={this.state.image_url}/>
            <button onClick={this.onSubmit}> Patvirtinti</button>
        </div>
    }
};

export default WashingMachineCreate;