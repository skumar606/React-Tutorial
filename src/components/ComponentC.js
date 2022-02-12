import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return (
                            <>
                                <p>Component C</p>
                                <p>Hello {username}!</p>
                            </>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
