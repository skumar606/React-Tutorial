import React from 'react'

const ThemeContext = React.createContext('light');
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

function ThemeWithContext() {
    return (
        <ThemeProvider value="light">
            <Toolbar />
        </ThemeProvider>
    );
}

// A component in the middle doesn't have to pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // React will find the closest theme Provider above and use its value.
    render() { 
        return (
            <ThemeConsumer>
                {
                    (theme) => {
                        return (
                            <button className={theme} >Themed Button</button>
                        )
                    }
                }
            </ThemeConsumer>
        )
    }
}

export default ThemeWithContext
