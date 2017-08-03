import React, {Component} from 'react';

import './style/blocks.scss';

function P(props) {
    return (
        <h1 styleName="p">{props.children}</h1>
    )
}

export {P};
