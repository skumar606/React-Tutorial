// Instead of passing a ref attribute created by createRef(), you pass a function. 
// The function receives the React component instance or HTML DOM element as its argument, which can be 
// stored and accessed elsewhere.

import React, { Component } from 'react'

class CallbackRefs extends Component {
    render() {
        return (
            <MyTextInput />
        )
    }
}

class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default CallbackRefs
