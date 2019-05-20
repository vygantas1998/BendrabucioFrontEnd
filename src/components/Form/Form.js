import React, {Component} from "react";
import classes from "./Form.module.css"
import Input from "./Input/Input";

class Form extends Component{
    state = {
    }

    invalid = [];

    onChange = (event, field) => {
        this.setState({
            ...this.state, 
            [field]: event
        })
    }

    onSubmit = () => {
        let isValid = true;
        let invalid = [];
        this.props.fields.forEach(val => {
            if(isValid && typeof val.validation === "function"){
                isValid = val.validation(this.state[val.field]);
                if(!isValid){
                    invalid.push(val.field);
                }
            }
        })
        if(isValid){
            this.props.submit.func(this.state);
        } else {
            this.invalid = invalid;
            this.forceUpdate();
        }
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
                                <Input attr={val.attr} id={val.field} field={val.field} invalid={this.invalid.includes(val.field)} type={val.field.includes("time")?"date":""} onChange={this.onChange} value={this.state[val.field]}/>
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
                    <div className={classes.errorSubmit}>
                        <span className={classes.error}>{this.props.error}</span>
                        <div className={classes.logo1}>
                            <button className={classes.button} onClick={this.onSubmit}>{this.props.submit.text}</button>
                        </div>
                    </div>
                </div>
    }
};

export default Form;