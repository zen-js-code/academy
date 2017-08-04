import React, {Component, Children} from 'react';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';

import './style/layout.scss';

export default class MainLayout extends Component {
    getPart(Part) {
        const {children} = this.props;

        return Children.toArray(children).filter((Child) => {
            return Child.type && Child.type.prototype instanceof Part;
        });
    }

    render() {
        const {className} = this.props;

        const header = this.getPart(Header);
        const menu = this.getPart(Menu);
        const main = this.getPart(Main);

        return (
            <div className={className} styleName="container">
                <header styleName="header">{header}</header>
                <main styleName="main">{main}</main>
                <nav styleName="menu">{menu}</nav>
            </div>
        );
    }
}

export {Header, Menu, Main};
