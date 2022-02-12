// Internally, React uses several clever techniques to minimize the number of costly DOM operations 
// required to update the UI.

// There are several other ways we can optimize our React application:

// Use the Production Build
//      - React includes many helpful warnings in development mode which makes app slower
//      - Creating production build => npm run build

// Profiling Components with the DevTools Profiler

// Virtualize Long Lists
//      - If your application renders long lists of data, then use “windowing” technique. 
//      - This technique only renders a small subset of your rows at any given time
//      - This will reduce the time taken to render a component

// Avoid Reconciliation
//      - When a component’s props or state change, React decides whether an actual DOM update is 
//      necessary by comparing the newly returned element with the previously rendered one. When they 
//      are not equal, React will update the DOM.
//      - But we can avoid this if we know that re-rendering is not necessary by overriding lifecycle 
//      method shouldComponentUpdate()
//      - By default shouldComponentUpdate() returns true, we can return false if it is not needed.


import React, { Component } from 'react'

class OptimizingPerfomance extends Component {
    render() {
        return (
            <CounterButton color="primary" />
        )
    }
}

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return false;
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default OptimizingPerfomance


