import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {JssProvider, SheetsRegistry} from 'react-jss'
//import Button from './button'
import Button from 'material-ui/Button';
import App from './react/components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import combinedReducer from './react/reducers';
import { ServerRouter as Router, Route, Switch } from 'react-router-dom'


const middleware = [ thunk ]
const APP_ENV = 'development'
if (APP_ENV !== 'production') {
    middleware.push(createLogger())
}



let store = createStore(
    combinedReducer,
    applyMiddleware(...middleware)
)


export default function render() {

    const sheets = new SheetsRegistry()

    const JssComp = () => (
        <JssProvider registry={sheets}>
            <div>
                <p>Test react</p>
                <Button raised type="submit" color="primary">
                    Login
                </Button>
            </div>
        </JssProvider>
    )

    const Elem = () => (
        <Provider store={store}>
            <JssComp></JssComp>
        </Provider>
    )

    const app = renderToString(
        <Elem/>
    )

    return (
        <html>
            <head>
                <title>Server-side rendering with rehydration</title>

                <style type="text/css" id="server-side-styles">
                    {sheets.toString()}
                </style>
            </head>
            <body>
                <div id="app">
                    <Elem/>
                </div>
            </body>
        </html>
    )
}