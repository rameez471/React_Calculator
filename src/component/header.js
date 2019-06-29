import React, { Component } from 'react';
import './header.css';
class Header extends Component {

    render() {
        return (
            <div className="component-header">
                <div>{this.props.name}</div>
            </div>
        );
    }
}

export default Header;