
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

/*document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Quitar la clase 'active' de todos los enlaces
            links.forEach(el => el.classList.remove('active'));

            // Agregar la clase 'active' al enlace clicado
            this.classList.add('active');
        });
    });
});*/




//PARA OCULTAR LA BARRA DE NAVEGACIÓN EN EL /REGISTER /LOGIN 

document.addEventListener('DOMContentLoaded', function () {
    
    var currentUrl = window.location.pathname;


    var navBar = document.querySelector('.nav-bar-a');

  
    if (currentUrl.includes('/register') || currentUrl.includes('/login')) {

        navBar.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    var currentUrl = window.location.pathname;

    var barraBusqueda = document.querySelector('.barra-busqueda');

  
    if (currentUrl.includes('/register') || currentUrl.includes('/login')) {
    
        barraBusqueda.style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded', function () {
    // Obtén la URL actual
    const currentUrl = window.location.pathname;

    // Selecciona el elemento ul
    const navBar = document.querySelector('.nav-bar-a');

    // Verifica si la URL incluye alguna de las páginas específicas
    if (currentUrl.includes('/productos') || currentUrl.includes('//productos/detail') || currentUrl.includes('//productos/categoria')) {
        // Oculta el elemento li que contiene ofertas
        const ofertasLi = navBar.querySelector('.Ofertas');
        if (ofertasLi) {
            ofertasLi.style.display = 'none';
        }
    }
});



