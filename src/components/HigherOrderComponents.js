// A higher-order component is a function that takes a component and returns a new component.
// const EnhancedComponent = higherOrderComponent(WrappedComponent);

// HOC helps in achieving code reusability

// Example - ButtonClickCounter, HeadingHoverCounter, InputKeypressCounter


// Passing props through the HOCs


import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export class HigherOrderComponents extends Component {
    render() {
        return (
            <div>
                <ClickCounter name="Sachin" />
                <br />
                <HoverCounter />
            </div>
        )
    }
}

export default HigherOrderComponents
