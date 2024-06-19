//  Mostrar u ocultar codigo a traves de un boton
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const codeBlocks = document.querySelectorAll('.code-block');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const targetBlock = document.getElementById(target);

            if (targetBlock.classList.contains('hidden')) {
                // Si el bloque está oculto, mostrarlo y ocultar los demás
                codeBlocks.forEach(block => block.classList.add('hidden'));
                targetBlock.classList.remove('hidden');
            } else {
                // Si el bloque está visible, ocultarlo
                targetBlock.classList.add('hidden');
            }
        });
    });
});
