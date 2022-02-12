import React from 'react'
import ReactDOM from 'react-dom'

// Portals provide a first-class way to render children into a DOM node that exists 
// outside the DOM hierarchy of the parent component.

// Even though a portal can be anywhere in the DOM tree, it behaves like a normal React 
// child in every other way. Features like context work exactly the same regardless of whether 
// the child is a portal, as the portal still exists in the React tree regardless of position in the 
// DOM tree.

// This includes event bubbling. An event fired from inside a portal will propagate to ancestors 
// in the containing React tree, even if those elements are not ancestors in the DOM tree. 

function Portals() {
    // return ReactDOM.createPortal(
    //     <h1>
    //         Portals Demo
    //     </h1>,
    //     document.getElementById('portal-root')
    // )

    return <Parent />;
}

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('portal-root')
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}

function Child() {
    return (
        <div className="modal">
            <button>Modal Button</button>
        </div>
    );
}

export default Portals

