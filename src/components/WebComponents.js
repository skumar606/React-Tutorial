// What are web components? => https://www.webcomponents.org/introduction
// Web components are a set of web platform APIs that allow you to create new custom, reusable, 
// encapsulated HTML tags to use in web pages and web apps.

// Using web components in react =>

// One common confusion is that Web Components use “class” instead of “className”.

import React, { Component } from 'react'

// https://www.webcomponents.org/element/@polymer/paper-button
import '@polymer/paper-button/paper-button.js';


export class WebComponents extends Component {
    render() {
        return (
            <div>
                <paper-button raised class="indigo">Click Me</paper-button>
            </div>
        )
    }
}

export default WebComponents
