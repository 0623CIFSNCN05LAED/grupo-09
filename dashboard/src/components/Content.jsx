import React from 'react';
import Productos from './Productos'
import Usuarios from './Usuarios'
import CantidadDeUsuariuos from "./CantidadDeUsuarios"
import CantidadDeProductos from './CantidadDeProductos';


function Contetnt(){

  return(
	<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
			<div className="row">

				{/*<!-- Cantidad Usuarios -->*/}
				

				     <CantidadDeUsuariuos/>


					{/*<!-- Total productos -->*/}
				
                    <CantidadDeProductos/>

					{/*<!-- Categorias productos -->*/}
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

					<Productos/>
					<Usuarios/>
					
				</div>
			</div>
	</React.Fragment>
)
}


export default Contetnt;



