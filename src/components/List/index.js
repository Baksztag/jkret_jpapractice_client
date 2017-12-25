/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        const {loading, items, ItemComponent, onItemClick} = this.props;
        console.log(items)

        return (
            loading ?
                <div className="list-loading">Loading...</div>
                :
                <div className="list">
                    {items.map((item, index) => (
                        <ItemComponent key={index}
                                       onItemClick={onItemClick}
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
    onItemClick: PropTypes.func.isRequired
};
List.defaultProps = {};

export default List;
