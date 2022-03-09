function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorCelcius = parseFloat(valor)

    var valorFarenheit = valorCelcius * 1.8 + 32
    console.log(valorFarenheit)
    var elementoConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "o resultado é " + valorFarenheit
    elementoConvertido.innerHTML = valorConvertido
}

function ConverterK() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorCelcius = parseFloat(valor)

    var valorKevin = valorCelcius + 273
    console.log(valorKevin)
    var elementoConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "o resultado é " + valorKevin
    elementoConvertido.innerHTML = valorConvertido
}
