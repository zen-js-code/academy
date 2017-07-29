import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Home} from '../modules/home/';
import {Course} from '../modules/course/';

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courses/:id" component={Course} />
        </Switch>
    );
}
