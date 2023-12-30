import React from 'react';
import { useState, useEffect } from 'react';

function Dolar(){
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/blue")
        .then(response => {
            return response.json()
        })
        .then(dolar => {
            setDolar(dolar)
        })
    }, [])

    return (
        <div className="mt-1">
            <div className="d-flex justify-content-center">
                <h4 className="h3 mb-0 text-gray-800">Dolar</h4>
            </div>
            <div className="d-sm-flex">
                <div className="p-1">
                    Compra: {dolar.compra}
                </div> 
                <div class="p-1">
                    Venta: {dolar.venta}
                </div> 
            </div>
            <div className="d-sm-flex">
                Hora: {dolar.fechaActualizacion}
            </div>
        </div>
    ); 
}

export default Dolar;

