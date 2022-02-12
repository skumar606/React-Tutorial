import React, { Component } from 'react'
import FancyButton from './FancyButton'

class ForwardingRefsInHOC extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("clicked")
    }
    componentDidMount() {
        console.log(this.ref.current)
    }
    render() {
        return (
            <FancyButton
                label="Click Me"
                handleClick={this.handleClick}
                ref={this.ref}
            />
        )
    }
}

export default ForwardingRefsInHOC
