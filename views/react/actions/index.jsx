import axios from 'axios'
import CONSTANTS from '../global'


const refreshAuth = (response) => ({
    type: CONSTANTS.LOGIN_STATUS,
    status: response.user !== false,
    user: response.user === false ? {} : response.user,
    error: response.user === false ? response.message : ''
})

const sendLoginRequest = () => (dispatch) => {
    const URL = `/login`
    const loginForm = document.getElementById('login-form')
    const formData = new FormData(loginForm);
    const args = {
        method: 'POST',
        url: URL,
        headers: {
            'Content-Type': 'application/json',
        },
        data: formData
    }
    return axios(args)
        .then(json => {
            console.log(json)
            return dispatch(refreshAuth(json.data))
            return ''
        })
}

export default sendLoginRequest