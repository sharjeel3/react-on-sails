import { combineReducers } from 'redux'
import project from './project'
import auth from './auth'

const combinedReducers = combineReducers({
    project,
    auth
})

export default combinedReducers
