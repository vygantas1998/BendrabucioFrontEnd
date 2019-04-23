import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    render(){
        const toggle = this.props.mobileSideBar ? " " + classes.toggle : "";

        return  <nav>
                    <div className={classes.navToggle + toggle} onClick={this.props.toggleMobileSideBar}>
                        <div className={classes.line1}></div>
                        <div className={classes.line2}></div>
                        <div className={classes.line3}></div>
                    </div>
                    <div className={classes.logo}>
                        <span>Bendrabučio valdymas</span>
                    </div>
                </nav>;
    }
}

export default Header;