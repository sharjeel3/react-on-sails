import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import App from './react/components/App'
import combinedReducer from './react/reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const middleware = [ thunk ]
const APP_ENV = 'development'
if (APP_ENV !== 'production') {
    middleware.push(createLogger())
}

let store = createStore(
    combinedReducer,
    applyMiddleware(...middleware)
)


render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={App} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
