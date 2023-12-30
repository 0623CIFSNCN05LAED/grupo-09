import React from 'react';
import { useState, useEffect } from 'react';

function Categorias(){
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
        <table className="table table-hover mt-5">
            <thead>
                <tr>
                    <td className="bg-primary text-white" align="center" colspan="11"><b>CATEGORIAS</b></td>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map(categoria => (
                    <tr>
                        <td>{categoria.id}</td>
                        <td>{categoria.categoria}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    ); 
}

export default Categorias;