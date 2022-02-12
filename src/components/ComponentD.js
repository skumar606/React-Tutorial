import React, { Component } from 'react'
import UserContext from './userContext'

export class ComponentD extends Component {
    static contextType = UserContext;

    render() {
        return (
            <>
                <div>Component D</div>
                <div>{this.context}</div> 
            </>       
        )
    }
}

export default ComponentD
