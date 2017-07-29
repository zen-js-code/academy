import React, {Component} from 'react';

import Layout, {Header, Main, Menu} from '../../layouts/main/';
import Editor from '../../components/editor';

export default class Course extends Component {
    render() {
        return (
            <Layout>
                <Menu>
                    Custom Menu
                </Menu>
                <Header>
                    Custom Header
                </Header>
                <Main>
                    <h2>Introduction</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3>Subtopic</h3>
                    <p>
                        more information
                    </p>
                    <Editor />
                </Main>
            </Layout>
        );
    }
}
