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
    document.getElementById("n8").style.border = "1px solid black"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value )
    var res = document.getElementById("res3")
    if  (numero2 !== 0){
        res.innerHTML = (numero1/numero2).toFixed(1)

    }else{
        res.innerHTMLt = "Não é permitido dividir por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
}

function media() {
    var m1 = parseFloat(document.getElementById("m1").value);
    var m2 = parseFloat(document.getElementById("m2").value);
    var m3 = parseFloat(document.getElementById("m3").value);
    var m4 = parseFloat(document.getElementById("m4").value);
    var m5 = parseFloat(document.getElementById("m5").value);
    
    var media = (m1 + m2 + m3 + m4 + m5) / 5;

    var respMedia = document.getElementById("respMedia");
    var msg = document.getElementById("msg");

    respMedia.textContent = "Sua média é: " + media.toFixed(2);

    if (media >= 7) {
        msg.textContent = "PASSOU!!!";
        msg.style.color = "green";
    } else {
        msg.textContent = "REPROVOU!";
        msg.style.color = "red";
    }

    }

    function calcularIMC() {
        var peso = parseFloat(document.getElementById("peso01").value);
        var altura = parseFloat(document.getElementById("altura01").value);
    
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }
    
        var calcIMC = peso / (altura * altura);
        
        var respcalcIMC = document.getElementById("respcalcIMC");
        var msgIMC = document.getElementById("msgIMC");
    
        respcalcIMC.textContent = "Seu IMC é: " + calcIMC.toFixed(2);
    
        if (calcIMC < 18.5) {
            msgIMC.textContent = "Abaixo do peso";
            msgIMC.style.color = "blue";
        } else if (calcIMC >= 18.5 && calcIMC < 24.9) {
            msgIMC.textContent = "Peso normal";
            msgIMC.style.color = "green";
        } else if (calcIMC >= 25 && calcIMC < 29.9) {
            msgIMC.textContent = "Sobrepeso";
            msgIMC.style.color = "orange";
        } else if (calcIMC >= 30 && calcIMC < 39.9) {
            msgIMC.textContent = "Obesidade";
            msgIMC.style.color = "red";
        } else {
            msgIMC.textContent = "Obesidade grave";
            msgIMC.style.color = "darkred";
        }
    }
    