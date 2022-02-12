// Context is designed to share data that can be considered “global” for a tree of React components, 
// such as the current authenticated user, theme, or preferred language.

import React, { Component } from 'react'
import { UserProvider } from './userContext'
import ComponentA from './ComponentA'
import ComponentD from './ComponentD'

// Context provides a way to pass data through the component tree without having to pass props 
// down manually at every level.

// 1. Create a Context
// 2. Provide a context value
// 3. Consume the context value

export class Context extends Component {
    render() {
        return (
            <UserProvider value="skumar">
                <ComponentA />
                <ComponentD />
            </UserProvider>
        )
    }
}

export default Context


// Context is primarily used when some data needs to be accessible by many components at different 
// nesting levels. Apply it sparingly because "it makes component reuse more difficult".

// If you only want to avoid passing some props through many levels, component composition is 
// often a simpler solution than context.

// For example, consider a Page component that passes a user and avatarSize prop several levels down 
// so that deeply nested Link and Avatar components can read it:

// <Page user={user} avatarSize={avatarSize} />
// // ... which renders ...
// <PageLayout user={user} avatarSize={avatarSize} />
// // ... which renders ...
// <NavigationBar user={user} avatarSize={avatarSize} />
// // ... which renders ...
// <Link href={user.permalink}>
//   <Avatar user={user} size={avatarSize} />
// </Link>

// One way to solve this issue without context is to pass down the Avatar component itself so that the 
// intermediate components don’t need to know about the user or avatarSize props.

// function Page(props) {
//   const user = props.user;
//   const userLink = (
//     <Link href={user.permalink}>
//       <Avatar user={user} size={props.avatarSize} />
//     </Link>
//   );
//   return <PageLayout userLink={userLink} />;
// }

// // Now, we have:
// <Page user={user} avatarSize={avatarSize} />
// // ... which renders ...
// <PageLayout userLink={...} />
// // ... which renders ...
// <NavigationBar userLink={...} />
// // ... which renders ...
// {props.userLink}
