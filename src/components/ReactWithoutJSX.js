// JSX is not a requirement for using React. 
// Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

import React from 'react'

function ReactWithoutJSX() {
    return React.createElement(
        "div",
        {
            name: "Sachin",
            className: "welcome"
        },
        React.createElement("h1", null, "Welcome!"),
        React.createElement("p", null, "Hi Sachin!")
    );

    // return (
    //     <div name="Sachin" className="welcome">
    //         <h1>Welcome!</h1>
    //         <p>Hi Sachin!</p>
    //     </div>
    // );
}

export default ReactWithoutJSX
