/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Layout from './scenes';

import Products from './scenes/Products';
import Suppliers from './scenes/Suppliers';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path="/products" component={Products}/>
                    <Route path="/suppliers" component={Suppliers}/>

                    {/*<Redirect from="/" to="/products"/>*/}
                </Layout>
            </BrowserRouter>
        );
    }
}

AppRouter.propTypes = {};
AppRouter.defaultProps = {};

export default AppRouter;
