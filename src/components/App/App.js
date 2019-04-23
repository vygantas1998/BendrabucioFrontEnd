import React, { Component } from 'react';
import Main from '../Main/Main';
import {BrowserRouter as Router} from "react-router-dom";
import LogIn from '../Pages/LogIn/LogIn';

class App extends Component {

  state = {
    loggedin : false
  }

  render() {
    const api = "http://localhost:56171";
    const body = this.state.loggedin ? <Main logout={this.logout} api={api}/> : <LogIn login={this.login} api={api}/>;
    return <Router>
      {body}
      </Router>  
  }

  login = () => {
    this.setState({...this.state, loggedin : true})
  }
  logout = () => {
    document.cookie = "token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT"; 
    this.setState({...this.state, loggedin : false})
  }
}

export default App;
