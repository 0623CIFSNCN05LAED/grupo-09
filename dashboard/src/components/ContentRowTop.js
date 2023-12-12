import React from 'react';
import ProductTable from './Table'

function ContentRowTop(){

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Usuarios in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">1000</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total productos -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">1000</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1"> Tipos de Productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">6</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

					
					




{/*<!--  
					<div className="row">
					
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>

-->*/}




						{/*<!-- Productos in DB -->*/}
						<div className="col-lg-12 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Productos in Data Base</h5>
								</div>
								<div className="card-body">
									{/* Fila de productos */}
									<div className="row">
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Heladeras
												</div>
											</div>
										</div>
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Lavarropas 
												</div>
											</div>
										</div>
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Cocinas
												</div>
											</div>
										</div>
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Microondas
												</div>
											</div>
										</div>
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Lavavajillas
												</div>
											</div>
										</div>
										<div className="col-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Hornos
												</div>
											</div>
										</div>
									</div>
									<ProductTable/>
								</div>
							</div>
						</div>
					</div>
				</div>
              
			 
	

				
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;