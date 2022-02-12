// StrictMode is a tool for highlighting potential problems in an application.

// StrictMode currently helps with:
// 1. Identifying unsafe lifecycles
//      - Certain legacy lifecycle methods are unsafe for use in async React applications
//      - But if we are using third party libraries, it can be difficult to ensure that these lifecycles aren’t being used.
// 2. Warning about legacy string ref API usage
//      - string ref api had several downsides so react warns about it in Strict Mode
// 3. Warning about deprecated findDOMNode usage
//      - React used to support findDOMNode to search the tree for a DOM node given a class instance. 
//      - Normally you don’t need this because you can attach a ref directly to a DOM node.
// 4. Detecting unexpected side effects
//      - react does work in 2 phases => render and commit
//      - The commit phase is usually very fast, but rendering can be slow
//      - so react may break the rendering work into pieces
//      - This means that React may invoke render phase lifecycles more than once before committing
//      - it’s important that they do not contain side-effects. like - invalid state or memory leaks
// 5. Detecting legacy context API
//      - The legacy context API is error-prone

import React from 'react'

function StrictMode() {
    return (
        <React.StrictMode>
            <MyComponent />
        </React.StrictMode>
    )
}

function MyComponent() {
    return (
        <div>
            react strict mode
        </div>
    )
}

export default StrictMode
