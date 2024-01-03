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
    
    var currentUrl = window.location.pathname;

    var burger = document.querySelector('.burger-btn');

  
    if (currentUrl.includes('/register') || currentUrl.includes('/login')) {
    
        burger.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Obtén la URL actual
    const currentUrl = window.location.pathname;

    // Selecciona el elemento ul
    const navBar = document.querySelector('.nav-bar-a');

    // Verifica si la URL incluye alguna de las páginas específicas
    if (currentUrl.includes('/productos') || 
    currentUrl.includes('//productos/detail') || 
    currentUrl.includes('//productos/categoria') || 
    currentUrl.includes('/usuarios/profile') || 
    currentUrl.includes('/usuarios/edit')|| 
    currentUrl.includes('/usuarios/delete')) {
        // Oculta el elemento li que contiene ofertas
        const ofertasLi = navBar.querySelector('.Ofertas');
        if (ofertasLi) {
            ofertasLi.style.display = 'none';
        }
    }
});


function toggleContent(id) {
    const content = document.getElementById(`${id}Content`);
    
    // Verifica el ancho de la ventana antes de realizar cambios
    if (window.innerWidth < 710) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    } 
}



// Función para obtener el estado del menú desde el almacenamiento local

function getMenuState() {
    return localStorage.getItem('menuState') === 'show';
}


function setMenuState(show) {
    localStorage.setItem('menuState', show ? 'show' : 'hide');
}


function toggleMenu() {
    var navBar = document.getElementById('nav-link1');
    var isMenuVisible = getMenuState();

 
    isMenuVisible = !isMenuVisible;

    navBar.classList.toggle('show', isMenuVisible);
    setMenuState(isMenuVisible);
}


document.addEventListener('DOMContentLoaded', function () {
    var navBar = document.getElementById('nav-link1');
    var isMenuVisible = getMenuState();
    navBar.classList.toggle('show', isMenuVisible);
});
