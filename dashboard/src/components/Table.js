import React from 'react';
import { useState, useEffect } from 'react';

const ProductTable = () => {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/productos")
        .then(response => {
            return response.json()
        })
        .then(productos => {
            setProductos(productos.data)
        })
    }, [])

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Ancho</th>
                    <th>Alto</th>
                    <th>Profundidad</th>
                    <th>Peso</th>
                    <th>Marca</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr>
                        <td>{producto.id}</td>
                        <td>{producto.sku}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.ancho}</td>
                        <td>{producto.alto}</td>
                        <td>{producto.profundidad}</td>
                        <td>{producto.peso}</td>
                        <td>{producto.marca_id}</td>
                        <td>{producto.categoria_id}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    ); 
}

export default ProductTable;
