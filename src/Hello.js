import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World!</h1>
                <p>{this.props.greetings}</p>
            </div>
        );
    }
}

export default Hello;