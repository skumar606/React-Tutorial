import React from 'react'

function ThemeWithoutContext() {
    return <Toolbar theme="dark" />;
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

class ThemedButton extends React.Component {
    render() {
        return (
            <button className={this.props.theme}>
                Themed Button
            </button>
        )
    }
}

export default ThemeWithoutContext
