import React from 'react';
import TextField from 'material-ui/TextField';

import Button from 'material-ui/Button';

import Paper from 'material-ui/Paper';

const style = {
    margin: 'auto',
    textAlign: 'left',
    display: 'block',
    maxWidth: 940,
    padding: '50px 30px'
};

const formStyle = {
    display: 'flex'
}

const Login = ({onLogin, error, loggedIn}) => (
    <div>
        <form method="POST" id="login-form" onSubmit={onLogin} style={formStyle} autoComplete="off" action="/login">
            <Paper style={style}>
                {error ? <div>{error}</div> : ''}
                {!loggedIn
                ?
                    <div>
                        <TextField
                            error={error !== ''}
                            id="email"
                            name="email"
                            label="Email address"
                            className=""
                            type="email"
                            margin="normal"
                        />
                        <div></div>
                        <TextField
                            error={error !== ''}
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <div><br/></div>
                        <div style={{textAlign: 'right'}}>
                            <Button raised type="submit" color="primary">
                                Login
                            </Button>
                        </div>
                    </div>
                :
                    <Button raised href="/project">See projects</Button>
                }
            </Paper>
        </form>
    </div>

);

export default Login