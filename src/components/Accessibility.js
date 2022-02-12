// Web accessibility is the design and creation of websites that can be used by everyone. Accessibility 
// support is necessary to allow assistive technology to interpret web pages.

// React fully supports building accessible websites, often by using standard HTML techniques.

// Standards and Guidelines => https://www.wuhcag.com/wcag-checklist/

// Semantic HTML => avoid using unnecessary div instead use Fragmant

// Accessible Forms => Every HTML form control, such as <input> and <textarea>, needs to be labeled 
// accessibly. Example - 
// <label htmlFor="namedInput">Name:</label>
// <input id="namedInput" type="text" name="name"/>

// Notifying the user of errors

// Focus Control => Ensure that your web application can be fully operated with the keyboard only.

// Programmatically managing focus => Using Refs


// Mouse and pointer events
//      - Ensure that all functionality exposed through a mouse or pointer event can also be accessed 
//      using the keyboard alone


// Other Points for Consideration
//      - Setting the language
//      - Setting the document title
//      - Color contrast => Ensure that all readable text on your website has sufficient color contrast 
//      to remain maximally readable by users with low vision


// Development and Testing Tools
// 1. The keyboard => Using Tab, Shift + Tab, and Enter
// 2. Using browser extension
// 3. Using screen readers











import React from 'react'

function Accessibility() {
    return (
        <div>
            Accessibility
        </div>
    )
}

export default Accessibility
