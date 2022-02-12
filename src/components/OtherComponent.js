import React, { Component } from 'react'

export class OtherComponent extends Component {
    calculate() {
        let res;
        for(let i=0; i<=1000000000; i++) {
            res = i;
        }
        return res;
    }
    render() {
        return (
            <div>
                This is a demostration of Code-Splitting. Number = {this.calculate()}
            </div>
        )
    }
}

export default OtherComponent

