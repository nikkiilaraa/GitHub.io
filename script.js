// Manejo del envío del formulario (Conmutador al estado de confirmación de la Tarea 4)
function handleRegister(event) {
  event.preventDefault();
  
  const formContainer = document.getElementById('form-container');
  const confirmationContainer = document.getElementById('confirmation-container');
  
  // Ocultar formulario y mostrar mensaje de confirmación
  if (formContainer && confirmationContainer) {
    formContainer.classList.add('hidden');
    confirmationContainer.classList.remove('hidden');
  }
}

// Permite regresar al estado inicial del formulario
function resetForm() {
  const formContainer = document.getElementById('form-container');
  const confirmationContainer = document.getElementById('confirmation-container');
  const signupForm = document.getElementById('signup-form');

  if (signupForm) signupForm.reset();
  if (formContainer && confirmationContainer) {
    confirmationContainer.classList.add('hidden');
    formContainer.classList.remove('hidden');
  }
}

// Menú desplegable móvil
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al presionar una opción
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});
