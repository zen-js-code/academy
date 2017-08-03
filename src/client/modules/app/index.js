import React, {Component, Children} from 'react';
import {NavLink} from 'react-router-dom';

import Layout, {Header, Main, Menu} from '../../layouts/main/';

export class App extends Component {
    render() {
        const Content = Children.only(this.props.children);

        return (
            <Layout>
                <Header>
                    <NavLink to="/">Home</NavLink>
                    <span> | </span>
                    <NavLink to="/courses/css">Courses - CSS</NavLink>
                </Header>
                <Menu>
                    Custom Menu
                </Menu>
                <Main>
                    {Content}
                </Main>
            </Layout>
        );
    }
}
