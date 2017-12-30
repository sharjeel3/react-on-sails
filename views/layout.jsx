import React, {Component} from 'react';
import Root from './react/Root'
import { renderToString } from 'react-dom/server'
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';


// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: green,
        accent: red,
        type: 'light',
    },
});

// Configure JSS
const jss = create(preset());

const generateClassName = createGenerateClassName();


class Layout extends Component {
    render() {
        return (
            <Root sheetsRegistry={sheetsRegistry}>
                <div>
                    <JssProvider registry={sheetsRegistry} jss={jss} generateClassName={generateClassName}>
                        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                            {this.props.children}
                        </MuiThemeProvider>
                    </JssProvider>
                </div>
            </Root>
        );
    }
}

export default Layout