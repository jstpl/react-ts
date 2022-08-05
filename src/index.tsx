import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from "./app/config/routes";
import store from "./app/config/store";
import AppRouter from "./app/compontnts/AppRouter";

ReactDOM.render(
    <Provider store={store}>
        <AppRouter>
            {Routes}
        </AppRouter>
    </Provider>,
    document.getElementById('root')
);
