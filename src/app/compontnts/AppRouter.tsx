import React from "react";
import {BrowserRouter, HashRouter, Switch} from 'react-router-dom';

const AppRouter = function (props) {
    return (
        <BrowserRouter>
            <HashRouter>
                <Switch>
                    <div>
                        {props.children}
                    </div>
                </Switch>
            </HashRouter>
        </BrowserRouter>
    );
};

export default AppRouter;
