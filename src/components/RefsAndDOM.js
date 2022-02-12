// Refs provide a way to access DOM nodes directly.

// There are a few good use cases for refs:
// 1. Managing focus, text selection, or media playback.
// 2. Triggering imperative animations.
// 3. Integrating with third-party DOM libraries.

// Creating Refs => React.createRef()

// Accessing Refs => const node = this.myRef.current;
// The value of the ref differs depending on the type of the node:
// 1. Ref attribute on HTML Element => node will be underlying DOM element
// 2. Ref attribute on Custon Class Component => node will be mounted instance of the component

// Refs and Function Components
// By default, you may not use the ref attribute on function components because they don’t have instances

// Callback Refs
// Callback refs is another way to manage refs, which gives more fine-grain control over when refs are 
// set and unset.



import React, { Component } from 'react'

class RefsAndDOM extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <div>
                    <label>Username: </label>
                    <input type="text" ref={this.textInput} />
                </div>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}

export default RefsAndDOM
