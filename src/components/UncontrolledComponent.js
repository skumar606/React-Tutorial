// In a controlled component, form data is handled by a React component. The alternative is 
// uncontrolled components, where form data is handled by the DOM itself.

// To assign initial value on any input element we can use defaultValue attribute.

// Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and 
// <select> and <textarea> supports defaultValue.

// The file input Tag
// In React, an <input type="file" /> is always an uncontrolled component because its value can only 
// be set by a user, and not programmatically.

import React, { Component } from 'react'

export class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRef = React.createRef();
        this.fileInputRef = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ' + this.inputRef.current.value);
        console.log('Selected file - ' + this.fileInputRef.current.files[0].name);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" defaultValue="Bob" ref={this.inputRef} />
                </div>
                <div>
                    <label>Upload File: </label>
                    <input type="file" ref={this.fileInputRef} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default UncontrolledComponent
