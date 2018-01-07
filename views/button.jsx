import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    button: {
        color: 'white',
        backgroundColor: 'green',
        padding: 20,
        fontSize: 20
    }
}

function Button({classes}) {
    return <button className={classes.button}>My Button</button>
}

export default injectSheet(styles)(Button)