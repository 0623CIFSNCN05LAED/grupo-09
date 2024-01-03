function getCart() {

    let storedString = [];
    for (let i = 0; i<localStorage.length; i++) {
        storedString[i] = localStorage.getItem(localStorage.key(i));

        const storedObject = JSON.parse(storedString[i]);  
        let producto = `<td id="producto">${storedObject.nombre}</td>`;
        cantidad = `<td id="cantidad">1</td>`;
        let precio = `<td id="precio">${storedObject.precio}</td><tr>`;

        document.getElementById("datos").innerHTML += producto+cantidad+precio; 
        
    } 
}

function setCart(productos) {
    productos2 = JSON.parse(productos)
    localStorage.setItem(productos2.id, productos);
    location.href = "/productos/cart";
}