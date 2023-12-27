import React from 'react';
import Productos from './Productos'
import Usuarios from './Usuarios'
import CardCountProductos from './CardCountProductos'
import CardCountUsuarios from './CardCountUsuarios'
import CardCountCategoryProductos from './CardCountCategoryProductos'

function Content(){

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
                    
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
                        <CardCountProductos/>
                        <CardCountCategoryProductos/>
                        <CardCountUsuarios/>
                        <Productos/>
                        <Usuarios/>
					</div>
				</div>
        </React.Fragment>
    )
}

export default Content;