import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import sendLoginRequest from '../actions'

class LoginApp extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }
    render(){
        const { onLogin, auth } = this.props
        const error = auth.error ? auth.error : ''
        const loggedIn = auth.login === true
        return (
            <div>
                <Login onLogin={onLogin} error={error} loggedIn={loggedIn}></Login>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: (event) => {
        event.preventDefault()
        dispatch(sendLoginRequest())
    }
})

let MainLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginApp)


export default MainLogin

