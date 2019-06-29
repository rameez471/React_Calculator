import React, { Component } from 'react';
import Body from './body';
import Header from  './header';
import calculate from '../logic/calculate';

class Layout extends Component {
    state={
        next:null,
        total:null,
        operation:null
    };
     handleClick=buttonName=>{
         this.setState(calculate(this.state,buttonName));
     }
    render() {
        return (
            <div className="component-layout">
                <Header name={this.state.next || this.state.total|| "0"}/>
                <Body clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default Layout;