/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';

import AppRouter from './Router';

class AppProvider extends Component {
    render() {
        return (
            <AppRouter/>
        );
    }
}

AppProvider.propTypes = {};
AppProvider.defaultProps = {};

export default AppProvider;
