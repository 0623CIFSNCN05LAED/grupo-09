import React from 'react';
/*import foto from '../assets/images/jordan-walke.png';*/

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;