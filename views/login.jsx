import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    input: {
        padding: '20px'
    }
})

const Login = () => (
    <form method="POST" noValidate={true} autoComplete="off" action="/login">
        <TextField
            id="login"
            label="Email address"
            className=""
            margin="normal"
        />
        <Button raised color="primary">
            Hello World
        </Button>
    </form>
);

export default Login