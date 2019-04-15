import React, {Component} from "react";
import classes from "./Form.module.css"

class Form extends Component{
    state = {
    }

    onChange = (event, field) => {
        this.setState({
            ...this.state, 
            [field]: event.target.value
        })
    }

    onSubmit = () => {
        this.props.submit.func(this.state);
    }

    componentDidMount(){
        let state = {};
        this.props.fields.forEach(el => {
            state[el.field] = ""
        });
        this.setState({...this.state, ...state});
    }

    getFields = () => {
        const fields = this.props.fields.map((val, i) => {
            if(typeof this.state[val.field] === "string"){
                return  <div key={i} className={classes.logo}>
                            <label htmlFor={val.field}>{val.title}</label>
                            <div className={classes.logo1}>
                                <input id={val.field} onChange={(event)=>this.onChange(event,val.field)} value={this.state[val.field]}/>
                            </div>
                        </div>
            }
            return "";
        })
        return fields;
    }

    render(){
        return <div className={classes.form}>
                    <div className={classes.nav}>
                        <span>{this.props.title}</span>
                    </div>
                    {this.getFields()}
                    <div>
                        <div className={classes.logo1}>
                            <button className={classes.button} onClick={this.onSubmit}>{this.props.submit.text}</button>
                        </div>
                    </div>
                </div>
    }
};

export default Form;