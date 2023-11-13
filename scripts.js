document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let mensaje = document.getElementById('mensaje').value;

    let li = document.createElement('li');
    li.textContent = nombre + ': ' + mensaje;

    document.getElementById('lista-mensajes').appendChild(li);

    document.getElementById('nombre').value = '';
    document.getElementById('mensaje').value = '';
});
