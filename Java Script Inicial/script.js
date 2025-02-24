function calc() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var operador = document.getElementById("operador").value
    var resultado

    switch (operador) {
        case "+":
            resultado = num1 + num2
            break;

        case "-":
            resultado = num1 - num2
            break

        case "*":
            resultado = num1 * num2
            break

        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2
            } else {
                resultado = "erro na conta por 0"
            }
            break;
        default:
            resultado = "Operador invalido"
            break;
    }
    if (resultado !== "erro na conta por 0") {
        var a = document.getElementById("resultado")
        a.textContent = format(resultado)
    } else {
        var a = document.getElementById("resultado")
        a.textContent = resultado
    }
    //é o mesmo que o If e Else!!
    //? = então 
    //if =  
    //else = :
    //function = função

}

const format = (num) => Number.isInteger(num) ? num : num.toFixed(2)