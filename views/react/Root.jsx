import React, {Component} from 'react'
import { renderToString } from 'react-dom/server'

const style = {
    fontFamily: 'Roboto, sans-serif'
}

export default class Root extends Component {
    constructor(props) {
        super(props);
        renderToString(this.props.children)
    }

    render(){
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <style id="jss-server-side">{this.props.sheetsRegistry.toString()}</style>
                </head>
                <body style={style}>
                    {this.props.children}
                    <script src="js/dist/bundle.js"></script>
                </body>
            </html>
        )
    }
}