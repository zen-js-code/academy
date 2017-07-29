import React, {Component} from 'react';

import Layout, {Header, Main, Menu} from '../../layouts/main/';

export default class Course extends Component {
    render() {
        return (
            <Layout>
                some text
                <Header>
                    Custom Header
                </Header>
                <Menu>
                    Custom Menu
                </Menu>
                <Main>
                    Custom Main
                </Main>
            </Layout>
        );
    }
}
