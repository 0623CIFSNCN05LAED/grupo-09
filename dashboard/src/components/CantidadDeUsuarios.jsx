import React from 'react';
import { useState, useEffect } from 'react';


const CantidadDeUsuariuos = () => {
    const [cantidadUsuarios, setCantidadUsuarios] = useState(0);

    useEffect(() => {
      const obtenerCantidadUsuarios = async () => {
        const response = await fetch('http://localhost:3000/api/usuarios');
        const { cantidadUsuarios } = await response.json();
        setCantidadUsuarios(cantidadUsuarios);
      };
  
      obtenerCantidadUsuarios();
    }, []);

    console.log(" cantidadUsuarios ", cantidadUsuarios);

  return(
	<React.Fragment>
					{/*<!-- Total usuarios -->*/}
					<div className="col-md-4 mb-4">
						<div className="card border-left-primary shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Usuarios</div>
										<div className="">{cantidadUsuarios}</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-film fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>


</React.Fragment>
)
}


export default CantidadDeUsuariuos;

