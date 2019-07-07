import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasFailed: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({hasFailed: true});

    }

    render() {
        if(this.state.hasFailed) {
            return <h1>Oops. Something went wrong.</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;