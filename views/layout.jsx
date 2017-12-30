import React, {Component} from 'react';

const style = {
    fontFamily: 'Roboto, sans-serif'
}

class Layout extends Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                </head>
                <body style={style}>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

export default Layout