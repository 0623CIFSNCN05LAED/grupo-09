import React from 'react';
import { useState, useEffect } from 'react';


const CantidadDeProductos = () => {
    const [cantidadProductos, setCantidadProductos] = useState(0);

    useEffect(() => {
      const obtenerCantidadProductos = async () => {
        const response = await fetch('http://localhost:3000/api/productos');
        const { cantidadProductos } = await response.json();
        setCantidadProductos(cantidadProductos);
      };
  
      obtenerCantidadProductos();
    }, []);
  
    console.log(" cantidadProductos ", cantidadProductos);


  return(
	<React.Fragment>
					{/*<!-- Total Productos -->*/}
					<div className="col-md-4 mb-4">
						<div className="card border-left-success shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Productos</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadProductos}</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-award fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
</React.Fragment>
)
}


export default CantidadDeProductos;