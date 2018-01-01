import React from 'react';
import TextField from 'material-ui/TextField';
import Layout from './layout'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import sendLoginRequest from './react/actions'

const style = {
    margin: 'auto',
    textAlign: 'right',
    display: 'block',
    maxWidth: 940,
    marginTop: 200,
    padding: '50px 30px'
};

const formStyle = {
    display: 'flex'
}

const onSubmit = (e) => {
    e.preventDefault()
    sendLoginRequest()
}

const Login = () => (
    <div>
        <form method="POST" id="login-form" onSubmit={onSubmit} style={formStyle} autoComplete="off" action="/login">
            <Paper style={style}>
            <TextField
                id="login"
                label="Email address"
                className=""
                margin="normal"
            />
            <div></div>
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
            <div><br/></div>
            <Button raised type="submit" color="primary">
                Login
            </Button>
            </Paper>
        </form>
    </div>

);

export default Login