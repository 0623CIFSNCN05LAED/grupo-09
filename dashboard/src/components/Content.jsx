import React from 'react';
import Productos from './Productos'
import Usuarios from './Usuarios'
import Categorias from './Categorias'
import CardCountProductos from './CardCountProductos'
import CardCountUsuarios from './CardCountUsuarios'
import CardCountCategory from './CardCountCategory'

function Content(){

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
                    
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
                        <CardCountProductos/>
                        <CardCountCategory/>
                        <CardCountUsuarios/>
                        <Productos/>
                        <Categorias/>
                        <Usuarios/>
					</div>
				</div>
        </React.Fragment>
    )
}

export default Content;