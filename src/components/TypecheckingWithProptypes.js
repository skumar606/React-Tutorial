// As your app grows, you can catch a lot of bugs with typechecking.

// To run typechecking on the props for a component, you can assign the special propTypes property

// Requiring Single Child => PropTypes.element.isRequired

// Default Prop Values => using defaultProps property

// propTypes in function component

import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TypecheckingWithProptypes extends Component {
    render() {
        return <Greeting name="Sachin" />;
        // return <Greeting name={100} />;
    }
}

class Greeting extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}!</div>
        )
    }
}

// function Greeting(props) {
//     return (
//         <div>Hello {props.name}!</div>
//     )
// }

Greeting.propTypes = {
    name: propTypes.string
}

Greeting.defaultProps = {
    name: 'Stranger'
};

export default TypecheckingWithProptypes
