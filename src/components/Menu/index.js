import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <div className="menu">
        <div className="menu-item">
            <Link to="/products">Products</Link>
        </div>
        <div className="menu-item">
            <Link to="/transactions">Transactions</Link>
        </div>
        <div className="menu-item">
            <Link to="/suppliers">Suppliers</Link>
        </div>
        <div className="menu-item">
            <Link to="/customers">Customers</Link>
        </div>
    </div>
);

export default Menu;
