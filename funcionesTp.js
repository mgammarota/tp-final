document.getElementById('boton_color').addEventListener('click', function (){
    document.body.style.backgroundColor= "white";
    alert('cambiaste el color de fondo');
});


function mostrar(elemento){
    var x = document.getElementsByClassName('contenido');

    for (var i = 0; i < x.length; i++) {
        x[i].style.display= "none";
    }
    document.getElementById(elemento).style.display = 'block';

}
