// Bundling

// Bundling is the process of following imported files and merging them into a single file: a “bundle”.
// This bundle can then be included on a webpage to load an entire app at once.

// Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify.


// Code-Splitting
// Bundling is great, but as your app grows, your bundle will grow too. Especially if you are 
// including large third-party libraries. If the bundle is very large then the app will take long time
// to load.
// To avoid winding up with a large bundle, we can "split" the bundle. Code-Splitting is a feature 
// which can create multiple bundles that can be dynamically loaded at runtime.


// import()
// The best way to introduce code-splitting into your app is through the "dynamic import()"
// Before:
// import { add } from './math';
// console.log(add(16, 26));
// After:
// import("./math").then(math => {
//   console.log(math.add(16, 26));
// });
// When Webpack comes across this syntax, it automatically starts code-splitting the app.


// React.lazy
// The React.lazy function lets you render a dynamic import as a regular component.
// Before:
// import OtherComponent from './OtherComponent';
// After:
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// This will automatically load the bundle containing the OtherComponent when this component is 
// first rendered.
// The lazy component should then be rendered inside a Suspense component, which allows us to show 
// some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.


import React, {Suspense} from 'react'

const OtherComponent = React.lazy(() => import('./OtherComponent'))

function CodeSplitting() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )
}

export default CodeSplitting


// Route-based code splitting
// Deciding where in your app to introduce code splitting can be a bit tricky.
// A good place to start is with routes. Most people on the web are used to page transitions taking 
// some amount of time to load.

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );