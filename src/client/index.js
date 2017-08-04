import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppContainer as HMRContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import './style/base/reset.scss';
import './style/theme/fonts.scss';
import './style/theme/typography.scss';

import AppContainer from './navigation/';

import store from './state/';

function renderApp() {
    render(
        <HMRContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <AppContainer />
                </BrowserRouter>
            </Provider>
        </HMRContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept('./navigation/', () => renderApp());
    module.hot.accept('./state/', () => renderApp());
    module.hot.accept('./state/initial/', () => renderApp());
    module.hot.accept('./state/initial/', () => renderApp());
}

renderApp();
