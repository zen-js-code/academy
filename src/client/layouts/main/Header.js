import React, {Component} from 'react';

import './style/header.scss';

export default class Header extends Component {
    render() {
        return this.props.children;
    }
}
