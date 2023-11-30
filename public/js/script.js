
/*window.addEventListener('load', function() {
    const formulario = document.querySelector('.container my-1');
    const mensajeRegistro = document.getElementById('mensajeRegistro');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

      
        formulario.style.display = 'none';

        
        mensajeRegistro.style.display = 'block';
    });
});
*/

function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        passwordToggle.textContent = 'Mostrar';
    }
}


