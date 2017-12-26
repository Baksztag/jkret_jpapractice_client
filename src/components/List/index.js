/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../../style/list.css';

class List extends Component {
    render() {
        const {loading, items, ItemComponent, onItemClick, activeItemId} = this.props;
        console.log(items)

        return (
            loading ?
                <div className="list-loading">Loading...</div>
                :
                _.isEmpty(items) ?
                    <div className="list-empty">
                        No items to display
                    </div>
                    :
                    <div className="list">
                        {items.map((item, index) => (
                            <ItemComponent key={index}
                                           onItemClick={onItemClick}
                                           activeItemId={activeItemId}
                                           item={item}/>
                        ))}
                    </div>
        );
    }
}

List.propTypes = {
    ItemComponent: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element
    ]),
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
    activeItemId: PropTypes.number
};
List.defaultProps = {
    activeItemId: null
};

export default List;
