import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/courses/css">CSS</Link>
        </header>
    );
}
