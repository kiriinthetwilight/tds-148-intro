const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    return "resultado: "+ (segundo+terceiro)
}

function printText(){
    console.log("Esta á uma função de soma")
}

function somaComParametro(n1,n2,n3){
    return n1 + n2 + n3
}

const somaComParametroExemploDois = (n1, n2, n3) => n1 + n2 + n3

console.log(somaComParametro(1,2,3))
console.log(somaComParametroExemploDois(4,5,6))

const aerofunction = () => "ola"

console.log(aerofunction())



