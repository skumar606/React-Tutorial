// Fundamentally, JSX just provides syntactic sugar for the 
// React.createElement(component, props, ...children) function.

// You can also use the self-closing form of the tag if there are no children. So:
// <div className="sidebar" />
// compiles into:
// React.createElement(
//   'div',
//   {className: 'sidebar'}
// ) 

// Specifying The React Element Type => React Component or React Element

// React Must Be in Scope

// User-Defined Components Must Be Capitalized

// Wrong! JSX type can't be an expression.
// return <components[props.storyType] story={props.story} />;

// Props in JSX =>
// 1. JavaScript Expressions as Props
// 2. string literal as a prop
// 3. If you pass no value for a prop, it defaults to true. 

// spread opeartor => const { kind, ...other } = props;

// Children in JSX => props.children


// false, null, undefined, and true are valid children. They simply don’t render. 
// These JSX expressions will all render to the same thing:
// <div />
// <div></div>
// <div>{false}</div>
// <div>{null}</div>
// <div>{undefined}</div>
// <div>{true}</div>


import React from 'react'

// function MyButton(props) {
//     return (
//         React.createElement(
//             'button',
//             {className: props.cssClass},
//             props.children
//         )
//         // <button className={props.cssClass}>{props.children}</button>
//     )
// }

function UnorderedList(props) {
    return <ul>{props.children}</ul>
}

function JSX() {
    const items = ["item1", "item2", "item3", "item4", "item5"]

    return (
        // React.createElement(
        //     MyButton,
        //     {cssClass: 'btn btn-primary'},
        //     'Click Me'
        // )

        // <MyButton cssClass='btn btn-primary'>Click Me</MyButton>

        <UnorderedList>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </UnorderedList>
    )
}

export default JSX
