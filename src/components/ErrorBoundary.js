// A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React 
// users, React 16 introduces a new concept of an “error boundary”.

// Error boundaries are React components that catch JavaScript errors anywhere in their child component 
// tree, log those errors, and display a fallback UI instead of the component tree that crashed.

// Error boundaries do not catch errors for:
// 1. Event handlers
// 2. Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// 3. Server side rendering
// 4. Errors thrown in the error boundary itself (rather than its children)

// Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. 
// Use componentDidCatch() to log error information.

// How About Event Handlers?
// If you need to catch an error inside an event handler, use the regular JavaScript try/catch statement
// try {

// }
// catch(error) {

// }

import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        console.log(error);
    }

    render() {
        if (this.state.error) {
            // You can render any custom fallback UI
            return <p>Something went wrong!</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundary
