import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1> Hello world </h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;