import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {App} from '../modules/app/';
import {Home} from '../modules/home/';
import {Course} from '../modules/course/';

export default function AppContainer() {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/courses/:id" component={Course} />
            </Switch>
        </App>
    );
}
