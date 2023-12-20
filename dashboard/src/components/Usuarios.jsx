import React from 'react';
import { useState, useEffect } from 'react';

function Usuarios(){
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/usuarios")
        .then(response => {
            return response.json()
        })
        .then(usuarios => {
            setUsuarios(usuarios.data)
        })
    }, [])

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Pais</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => (
                    <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.fullName}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.telefono}</td>
                        <td>{usuario.country}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    ); 
}

export default Usuarios;