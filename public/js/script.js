
window.addEventListener('load', function() {
    const formulario = document.getElementById('container my-1');
    const mensajeRegistro = document.getElementById('mensajeRegistro');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

      
        formulario.style.display = 'none';

        
        mensajeRegistro.style.display = 'block';
    });
});
