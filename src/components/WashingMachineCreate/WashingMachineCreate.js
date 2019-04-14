import React, {Component} from "react";
import classes from "./WashingMachineCreate.module.css"

class WashingMachineCreate extends Component{
    state = {
        title: "",
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


            <div className={classes.nav}>
                <span>PRIDĖTI SKALBYKLĘ</span>
            </div>

            <div className={classes.logo}>
                <span>Pavadinimas</span>
            </div>

            <div>
                <tr className={classes.logo1}>
                <input onChange={(event)=>this.onChange(event,"title")} value={this.state.title}/>
                </tr>
            </div>

            <div className={classes.logo}>
                <span>Aprašymas</span>
            </div>

            <div>
                <tr className={classes.logo1}>
                <input onChange={(event)=>this.onChange(event,"description")} value={this.state.description}/>
                </tr>
            </div>

            <div className={classes.logo}>
                <span>Nuotrauka(URL)</span>
            </div>

            <div>
                <tr className={classes.logo1}>
                <input onChange={(event)=>this.onChange(event,"image_url")} value={this.state.image_url}/>
                </tr>
                <tr className={classes.logo1}>
                <button onClick={this.onSubmit}> Patvirtinti</button>
                </tr>
                </div>
        </div>
    }
};

export default WashingMachineCreate;