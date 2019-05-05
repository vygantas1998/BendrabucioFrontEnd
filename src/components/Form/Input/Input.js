import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";

class Input extends Component{
    render(){
        return <input {...val.attr} id={val.field} onChange={(event)=>this.onChange(event,val.field)} value={this.state[val.field]}/>;
    }
}

export default Input;