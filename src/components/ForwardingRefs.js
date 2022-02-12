// Ref forwarding is a technique for automatically passing a ref through a component to one 
// of its children.

// In the example below, FancyButton uses React.forwardRef to obtain the ref passed to it, and then 
// forward it to the DOM button that it renders:


import React, { Component } from 'react'

const MyLoginForm = React.forwardRef((props, ref) => {
    // console.log("ref = " + ref.current)
    return (
        <form>
            <input type="text" ref={ref} placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button>Submit</button>
        </form>
        
    )
})

class ForwardingRefs extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.focus();
        // console.log(this.myRef.current);
    }

    render() {
        return (
            <MyLoginForm ref={this.myRef} />
        )
    }
}

export default ForwardingRefs


// Forwarding Refs in Higher Order Component

