import React from 'react';
import { useState, useEffect } from 'react';

function CardCountCategory(){
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/categorias")
        .then(response => {
            return response.json()
        })
        .then(categorias => {
            setCategorias(categorias.data)
        })
    }, [])

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Categorias Productos</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{categorias.length}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default CardCountCategory;

