document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    const inputUsuario = document.getElementById('usuario');
    const inputPassword = document.getElementById('password');
    
    const errorUsuario = document.getElementById('errorUsuario');
    const errorPassword = document.getElementById('errorPassword');

    formLogin.addEventListener('submit', (e) => {

        e.preventDefault();
        

        errorUsuario.textContent = '';
        errorPassword.textContent = '';
        
        let esValido = true;


        const valorUsuario = inputUsuario.value.trim();
        if (valorUsuario === '') {
            errorUsuario.textContent = 'El nombre de usuario o correo es obligatorio.';
            esValido = false;
        } else if (valorUsuario.length < 4) {
            errorUsuario.textContent = 'El usuario debe tener al menos 4 caracteres.';
            esValido = false;
        }

        const valorPassword = inputPassword.value.trim();
        if (valorPassword === '') {
            errorPassword.textContent = 'La contraseña es obligatoria.';
            esValido = false;
        } else if (valorPassword.length < 6) {
            errorPassword.textContent = 'La contraseña debe incluir al menos 6 caracteres.';
            esValido = false;
        }


        if (esValido) {
            alert('¡Inicio de sesión exitoso!');
            formLogin.reset(); // Reinicia los campos del formulario
        }
    });
});