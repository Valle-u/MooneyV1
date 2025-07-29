function toggleDescripcion(event, btn) {
    event.stopPropagation();
    // Cierra todas las descripciones activas menos la actual
    document.querySelectorAll('.descripcion-servicio.activa').forEach(function(desc) {
        if (desc !== btn.nextElementSibling) {
            desc.classList.remove('activa');
            if (desc.previousElementSibling && desc.previousElementSibling.classList.contains('btn-ver-mas')) {
                desc.previousElementSibling.textContent = 'Ver más';
            }
        }
    });
    // Alterna la descripción actual
    const desc = btn.nextElementSibling;
    desc.classList.toggle('activa');
    btn.textContent = desc.classList.contains('activa') ? 'Ver menos' : 'Ver más';
}

