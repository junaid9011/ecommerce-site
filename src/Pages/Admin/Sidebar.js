import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div class="row">
        <div class="col-2">
            <div class="sidebar-wrapper">
                <nav id="sidebar">
                    <ul class="list-unstyled components">
                    <li>
                        <Link><i class="fas fa-tachometer-alt"></i> Dashboard</Link>
                    </li>
            
                    <li>
                        <Link to="#productSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fab fa-product-hunt"></i> Products</Link>
                        <ul class="collapse list-unstyled" id="productSubmenu">
                            <li>
                            <Link to="/admin/products "><i class="fas fa-clipboard-list"></i> All</Link>
                            </li>
            
                            <li>
                            <Link to="/admin/product"><i class="fas fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i class="fas fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i class="fas fa-users"></i> Users</Link>
                    </li>
            
                </ul>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default Sidebar;