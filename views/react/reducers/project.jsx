import CONSTANTS from '../global'

const defaultState = {
    loading: false
}

const project = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.UPDATE_STATUS:
            return {...state, loading: action.status}
        default:
            return state
    }
}


export default project