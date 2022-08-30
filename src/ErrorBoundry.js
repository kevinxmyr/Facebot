import React, { Component } from 'react';


class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    //lifecycleHooks
    componentDidCatch(error, info){
        this.state({ hasError: true})
    }

    state = {  }
    render() { 
        if(this.state.hasError){
            return <h1>Ooops. That is not good. Error</h1>
        } else {
            return this.props.children
        }

    }
}
 
export default ErrorBoundry;