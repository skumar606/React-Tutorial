// The term “render prop” refers to a technique for sharing code between React components using a prop 
// whose value is a function.

// Components are the primary unit of code reuse in React, but it’s not always obvious how to share the 
// state or behavior that one component encapsulates to other components that need that same state.

// For example, the following component tracks the mouse position in a web app. And we want to render a
// cat at the current mouse position

import React, { Component } from 'react'
import propTypes from 'prop-types'

class RenderProps extends Component {
    render() {
        return (
            <MouseTracker />
        )
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>

                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                    // <Dog mouse={mouse} />
                )} />

                {/* <Mouse>
                    {
                        mouse => {
                            return <Cat mouse={mouse} />
                        }
                    }
                </Mouse> */}
            </div>
        )
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

// Mouse.propTypes = {
//     children: propTypes.func.isRequired
// }


class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" 
        style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: "125px" }} />
      );
    }
}

// class Dog extends React.Component {
//     render() {
//       const mouse = this.props.mouse;
//       return (
//         <img src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497" 
//         style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: "125px" }} />
//       );
//     }
// }


export default RenderProps
