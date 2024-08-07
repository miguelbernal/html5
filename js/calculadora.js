document.getElementById('numero_1').focus()

document.getElementById('sumar').addEventListener('click', function() {
    let numero_1 = parseInt(document.getElementById('numero_1').value)
    let numero_2 = parseInt(document.getElementById('numero_2').value)
    document.getElementById('resultado').value = numero_1 + numero_2
})

document.getElementById('restar').addEventListener('click', function() {
    let numero_1 = parseInt(document.getElementById('numero_1').value)
    let numero_2 = parseInt(document.getElementById('numero_2').value)
    document.getElementById('resultado').value = numero_1 - numero_2
})