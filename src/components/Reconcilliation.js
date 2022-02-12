// Introduction
// In React, you can think of the render() function as creating a tree of React elements.
// But when state or props update, that render() function will return a different tree of React elements.
// React then needs to figure out how to efficiently update the UI to match the most recent tree.


// For comparing two trees react uses heuristic O(n) algorithm based on two assumptions:
// 1. Two elements of different types will produce different trees.
// 2. React will update child element using key prop if provided


// The Diffing Algorithm
// When diffing two trees, React first compares the two root elements. The behavior is different 
// depending on the types of the root elements:
// 1. Elements Of Different Types => 
//      - react will tear down old tree => componentWillUnmount()
//      - and will build new tree from scratch => componentDidMount()
//      - any state assciated with the old tree will be lost
// 2. DOM Elements Of The Same Type => 
//      - react will only update the changed attribute
// 3. Component Elements Of The Same Type
//      - the instance stays the same, so that state is maintained across renders
//      - React updates the props of the underlying component instance to match the new element, 
//      - and calls UNSAFE_componentWillReceiveProps(), UNSAFE_componentWillUpdate() and componentDidUpdate() on the underlying instance.


// Recursing On Children
// 1. By default, when recursing on the children of a DOM node, React just iterates over both lists of 
// children at the same time and generates a mutation whenever there’s a difference.
// 2. That's why react uses key to render a list of elements.
// 3. When children have keys, React uses the key to match children in the original tree with children 
// in the subsequent tree.

import React, { Component } from 'react'
const data = require('../data/movies.json');


export class Reconcilliation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const movies = data.data;
        this.setState({movies: movies});
        console.log(movies);
    }

    handleClick() {
        const movies = this.state.movies;
        movies.sort((m1, m2) => m2.year-m1.year);
        this.setState({movies: movies});
        console.log("sorted array: ", movies);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Sort By Latest</button>
                {
                    this.state.movies.map(movie => {
                        return (
                            <React.Fragment key={movie.id}>
                                <h4>{movie.title}</h4>
                                <div>Rating: {movie.rating}</div>
                                <div>Release Year: {movie.year}</div>
                                <hr />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }
}

export default Reconcilliation
