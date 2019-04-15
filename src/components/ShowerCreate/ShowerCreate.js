import React, {Component} from "react";
import classes from "./ShowerCreate.module.css"

class ShowerCreate extends Component{
    state = {
        type: "",
        description: "",
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
        console.log(this.props)
        return <div className={classes.form}>


            <div className={classes.nav}>
                <span>PRIDĖTI DUŠĄ</span>
            </div>

            <div className={classes.logo}>
                <span>Tipas</span>
            </div>

            <div>
                <div className={classes.logo1}>
                <input onChange={(event)=>this.onChange(event,"type")} value={this.state.type}/>
                </div>
            </div>

            <div className={classes.logo}>
                <span>Aprašymas</span>
            </div>

            <div>
                <div className={classes.logo1}>
                <input onChange={(event)=>this.onChange(event,"description")} value={this.state.description}/>
                </div>
            </div>

            <div>
                <div className={classes.logo1}>
                <button onClick={this.onSubmit}> Patvirtinti</button>
                </div>
            </div>
        </div>
    }
};

export default ShowerCreate;