import React, {Component} from 'react';

import './style/blocks.scss';

function P(props) {
    return (
        <p styleName="p">{props.children}</p>
    )
}

export {P};
