import {combineReducers} from 'redux';

import config from './config';
import courses from './courses';

export default combineReducers({
    config,
    courses
});
