/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import '../style/index.css';

class AppLayout extends Component {
    render() {
        const {children} = this.props;

        return (
            <div className="jpa-practice-client">
                {children}
            </div>
        );
    }
}

AppLayout.propTypes = {};
AppLayout.defaultProps = {};

export default AppLayout;
