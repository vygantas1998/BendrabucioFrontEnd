import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

class Input extends Component{
    render(){
        switch(this.props.type)
        {
            case "date":
                const selectedDate = this.props.value ? new Date(this.props.value) : new Date();
                if(!this.props.value){
                    this.props.onChange(selectedDate.toISOString(), this.props.field);
                }
                return <DatePicker id={this.props.id} showTimeSelect dateFormat="MMMM d, yyyy hh:mm" 
                onClickOutside={() => this.props.onChange(selectedDate.toISOString(),this.props.field)} 
                selected={selectedDate} 
                onChange={date => this.props.onChange(date.toISOString(), this.props.field)} />

            default:
            return <input {...this.props.attr} id={this.props.id} onChange={(event)=>this.props.onChange(event.target.value,this.props.field)} value={this.props.value}/>;
        }
        
    }
}

export default Input;