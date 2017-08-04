import React, {Component} from 'react';

import './style/headings.scss';

function H1(props) {
    return (
        <h1 styleName="heading__h1">{props.children}</h1>
    )
}

function H2(props) {
    return (
        <h2 styleName="heading__h2">{props.children}</h2>
    )
}

function H3(props) {
    return (
        <h3 styleName="heading__h3">{props.children}</h3>
    )
}

function H4(props) {
    return (
        <h4 styleName="heading">{props.children}</h4>
    )
}

export {H1, H2, H3, H4};
