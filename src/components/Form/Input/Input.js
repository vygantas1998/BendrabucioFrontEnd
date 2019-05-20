import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import classes from './Input.module.css';

class Input extends Component{
    render(){
        console.log(this.props.invalid);
        let input = "";
        switch(this.props.type)
        {
            case "date":
                const selectedDate = this.props.value ? new Date(this.props.value) : new Date();
                if(!this.props.value){
                    this.props.onChange(selectedDate.toISOString(), this.props.field);
                }
                input = <DatePicker id={this.props.id} 
                                    showTimeSelect 
                                    dateFormat="MMMM d, yyyy hh:mm" 
                                    onClickOutside={() => this.props.onChange(selectedDate.toISOString(),this.props.field)} 
                                    selected={selectedDate} 
                                    onChange={date => this.props.onChange(date.toISOString(), this.props.field)} />
                break;
            default:
                input = <input {...this.props.attr} id={this.props.id} onChange={(event)=>this.props.onChange(event.target.value,this.props.field)} value={this.props.value}/>;
        }
        return <div className={this.props.invalid ? classes["error"] : ""}>
            {input}
        </div>
    }
}

export default Input;