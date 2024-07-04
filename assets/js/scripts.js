$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Seleccionar todas las filas que contienen elementos 'details'
//     const rows = document.querySelectorAll('.row');

//     // Función para verificar si la pantalla es de baja resolución
//     const isMobileView = () => window.innerWidth <= 768;

//     // Iterar sobre cada fila
//     rows.forEach(row => {
//         // Seleccionar todos los elementos 'details' en la fila actual
//         const detailsElements = row.querySelectorAll('details');

//         // Añadir un evento 'toggle' a cada elemento 'details' en la fila
//         detailsElements.forEach(details => {
//             details.addEventListener('toggle', function() {
//                 // Verificar si la pantalla es de baja resolución
//                 if (isMobileView()) {
//                     // En dispositivos móviles, cerrar todos los demás elementos 'details' en todas las filas
//                     if (this.open) {
//                         rows.forEach(r => {
//                             r.querySelectorAll('details').forEach(d => {
//                                 if (d !== details) {
//                                     d.open = false;
//                                 }
//                             });
//                         });
//                     }
//                 } else {
//                     // En resoluciones mayores, abrir todos los 'details' en la fila si uno se abre
//                     const openState = this.open;
//                     if (openState) {
//                         detailsElements.forEach(detailsItem => {
//                             detailsItem.open = true;
//                         });
                        
//                         // Cerrar todos los 'details' en otras filas
//                         rows.forEach(otherRow => {
//                             if (otherRow !== row) {
//                                 const otherDetailsElements = otherRow.querySelectorAll('details');
//                                 otherDetailsElements.forEach(otherDetails => {
//                                     otherDetails.open = false;
//                                 });
//                             }
//                         });
//                     } else {
//                         // Si se cierra un details, mantener el mismo estado para todos los elements 'details' en la fila
//                         detailsElements.forEach(detailsItem => {
//                             detailsItem.open = false;
//                         });
//                     }
//                 }
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(details => {
        details.addEventListener('toggle', function () {
            if (details.open) {
                detailsElements.forEach(el => {
                    if (el !== details) {
                        el.removeAttribute('open');
                    }
                });
            }
        });
    });
});