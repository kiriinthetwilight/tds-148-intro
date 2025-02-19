function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value )
    var res = document.getElementById("res")
    res.textContent = numero1+numero2
    return res
    
}
function subtracao(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value )
    var res = document.getElementById("res1")
    res.textContent = numero1-numero2
    return res1
}
function multiplicacao(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value )
    var res = document.getElementById("res2")
    res.textContent = numero1*numero2
    return res2
}
function divisao(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value )
    var res = document.getElementById("res3")
    res.textContent = numero1/numero2
    return res3
}