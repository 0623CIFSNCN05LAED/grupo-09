import React from 'react';
import image from '../assets/images/logo.png';
import '../assets/css/style.css';

function SideBar() {
    return (
        <React.Fragment>
            {/* Sidebar */}
            <ul className="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - GRUPO-9</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Actions</div>

                {/* Nav Item - Usuarios */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span>
                    </a>
                </li>

                {/* Nav Item - Productos */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}
        </React.Fragment>
    );
}

export default SideBar;
