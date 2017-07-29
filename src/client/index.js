import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';

import './style/base/reset.scss';
import './style/theme/fonts.scss';

import App from './navigation/';

function renderApp() {
    render(
        <AppContainer>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept('./navigation/', () => renderApp());
}

renderApp();
