// Using Ref inside a function component

import React, { useRef } from 'react'

function RefsInFunctionComponent() {
    return <MyTextInput />
}

function MyTextInput(props) {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <div>
                <label>Username: </label>
                <input type="text" ref={textInput} />
            </div>
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    );
}

export default RefsInFunctionComponent
