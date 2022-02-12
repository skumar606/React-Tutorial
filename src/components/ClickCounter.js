import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <button onClick={incrementCount}>Clicked {count} times {this.props.name}</button>
        )
    }
}

export default UpdatedComponent(ClickCounter)
