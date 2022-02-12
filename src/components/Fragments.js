import React from 'react'

// A common pattern in React is for a component to return multiple elements. Fragments let you group 
// a list of children without adding extra nodes to the DOM.

// Fragments declared with the explicit <React.Fragment> syntax may have keys.

function Columns() {
    return (
        <React.Fragment>
            <td>Hello</td>
            <td>World</td>
        </React.Fragment>
    )
}

function Fragments() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    )
}

export default Fragments
