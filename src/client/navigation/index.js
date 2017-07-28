import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Course from './Course';

import Header from '../components/header/Header';

export default function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/courses/:id" component={Course} />
            </Switch>
        </div>
    );
}
