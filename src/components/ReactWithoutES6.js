// If you don’t use ES6 yet, you may use the create-react-class module instead

// Declaring Default Props => getDefaultProps

// Setting the Initial State => getInitialState

// Autobinding => With createReactClass(), there is no need to bind the methods


var createReactClass = require('create-react-class');
var ReactWithoutES6 = createReactClass({
    handleClick: function() {
        this.setState(function(prevState, props) {
            return {
                count: prevState.count+1
            }
        })
    },
    getDefaultProps: function () {
        return {
            name: "Sachin"
        }
    },
    getInitialState: function() {
        return {
            count: 0
        }
    },
    render: function () {
        return <h1 onClick={this.handleClick}>Hello, {this.props.name}!({this.state.count})</h1>;
    }
});

export default ReactWithoutES6
