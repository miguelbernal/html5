/*
nombre_funcion(parametros){
    tomar la naranja
    tomar el cuchillo
    pelar la naranja
}
*/

let img = document.getElementById('imagen')
console.log(img)
img.addEventListener('click', function() {
    mostrar_mensaje('Hola, has hecho click en la imagen')
})

let h2 = document.getElementById('subtitulo')
console.log(h2)
h2.addEventListener('click', function() {
    mostrar_mensaje('Hola, has hecho click en el subtitulo')
})

function mostrar_mensaje(msg){
    alert(msg)
    console.log(msg)
    document.getElementsByTagName('h1')[0].style.display = 'none'
}

document.getElementById('boton_ingresar').addEventListener('click', function() {
    console.log('boton_ingresar')
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    console.log(usuario + ' - ' + password) 
})
