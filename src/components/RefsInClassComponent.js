// How to attach ref on class component

import React, { Component, useRef } from 'react'

export class RefsInClassComponent extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return <MyTextInput ref={this.textInput} />
    }
}

class MyTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return <input type="text" ref={this.textInput} />
    }
}

export default RefsInClassComponent
