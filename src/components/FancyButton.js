import React, { Component } from 'react'
import logProps from './logProps'

class FancyButton extends Component {
    render() {
        const {handleClick, label} = this.props;
        return (
            <button onClick={handleClick} >{label}</button>
        )
    }
}

export default logProps(FancyButton)
