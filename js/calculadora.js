document.getElementById('numero_1').focus()

let botones = document.getElementsByTagName('button')

for (let indice = 0; indice < botones.length; indice++) {
    botones[indice].addEventListener('click', function (xthis) {
        let boton = xthis.target['id']
        let numero_1 = parseInt(document.getElementById('numero_1').value)
        let numero_2 = parseInt(document.getElementById('numero_2').value)
        if(boton === 'sumar'){
            document.getElementById('resultado').value = numero_1 + numero_2
            document.getElementById('operacion').innerText = "Sumar"
        } else if(boton === 'restar'){
            document.getElementById('resultado').value = numero_1 - numero_2
            document.getElementById('operacion').innerText = "Restar"
        } else if(boton === 'multiplicar'){
            document.getElementById('resultado').value = numero_1 * numero_2
            document.getElementById('operacion').innerText = "Multiplicar"
        } else if(boton === 'dividir'){
            document.getElementById('resultado').value = numero_1 / numero_2
            document.getElementById('operacion').innerText = "Dividir"
        } else if(boton === 'modulo'){
            document.getElementById('resultado').value = numero_1 % numero_2
            document.getElementById('operacion').innerText = "Modulo"
        }
    })
}