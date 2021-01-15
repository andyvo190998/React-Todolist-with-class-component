import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div style={header}>
                <h1>
                    TodoList
                </h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>

            </div>
        )
    }
}
const header = {
    // background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'

}
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}
export default Header

