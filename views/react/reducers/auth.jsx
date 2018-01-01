import CONSTANTS from '../global'

const defaultState = {
    login: false,
    user: {},
    error: ''
}

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.LOGIN_STATUS:
            return {...state,
                login: action.status,
                user: action.user,
                error: action.error
            }
        default:
            return state
    }
}

export default auth