// The Profiler measures how often a React application renders and what the “cost” of rendering is. 

// Its purpose is to help identify parts of an application that are slow and may benefit from 
// optimizations such as memoization.

// A Profiler can be added anywhere in a React tree to measure the cost of rendering that part of 
// the tree.

// Multiple Profiler components can be used to measure different parts of an application

// Profiler components can also be nested to measure different components within the same subtree


import React, { Component, Profiler } from 'react'

export class ProfilerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    callback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        console.log(id);
        console.log(phase);
        console.log(actualDuration);
    }

    clickHandler() {
        this.setState(prevState => ({count: prevState.count+1}))
    }

    render() {
        return (
            <Profiler id="Clock" onRender={this.callback}>
                <Clock />
            </Profiler>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
            intervalID: null
        }
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        const id = setInterval(this.timer, 1000);
        this.setState({intervalID: id})
    }

    timer() {
        this.setState({currentTime: new Date().toLocaleTimeString()})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    render() {
        return <h1>{this.state.currentTime}</h1>
    }
}

export default ProfilerDemo
