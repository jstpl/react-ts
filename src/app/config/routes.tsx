import React from "react";
import {Route} from 'react-router-dom';
import SideBar from "../compontnts/SideBar";

const Routes = (
    <>
        <Route exact path="/" component={function (props) {
            return (
                <div>
                    <h2>Home page</h2>
                    <SideBar/>
                </div>
            );
        }}/>

        <Route exact path="/about" component={function (props) {
            return (
                <div>
                    <h2>About page</h2>
                    <SideBar/>
                </div>
            );
        }}/>
    </>
);

export default Routes;
