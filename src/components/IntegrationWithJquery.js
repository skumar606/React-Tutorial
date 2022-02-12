// React is unaware of changes made to the DOM outside of React. It determines updates based on its 
// own internal representation, and if the same DOM nodes are manipulated by another library, 
// React gets confused and has no way to recover.


// The easiest way to avoid conflicts is to prevent the React component from updating. 

// We can do this by rendering elements that React has no reason to update, like an empty <div />.

