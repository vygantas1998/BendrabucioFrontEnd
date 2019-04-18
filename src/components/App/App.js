import React, { Component } from 'react';
import Main from '../Main/Main';
import {BrowserRouter as Router} from "react-router-dom";
import LogIn from '../Pages/LogIn/LogIn';

class App extends Component {

  state = {
    loggedin : false
  }

  render() {

    const body = this.state.loggedin ? <Main/> : <LogIn login={this.login}/>;
    return <Router>
      {body}
      </Router>  
  }

  login = () => {
    this.setState({...this.state, loggedin : true})
  }
  logout = () => {
    this.setState({...this.state, loggedin : false})
  }
}

export default App;
