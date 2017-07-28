import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses/css">CSS</NavLink>
        </header>
    );
}
