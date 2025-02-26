var proximobtn = document.querySelector('.proximo')
var previabtn = document.querySelector('.previa')
var carrossel = document.querySelector('.carrossel')
var lista = document.querySelector('.lista')
var item = document.querySelector('.item')
tempo = document.querySelector('.carrosel .tempo')

let timeRunning = 3000
let timeAutoNext = 7000

proximobtn.onclick = function(){
    showSlider('proximo')
}

previabtn.onclick = function(){
    showSlider('previa')
}

let runTimeOut

let runNextAuto = setTimeout(() =>{
    proximobtn.click()
} )

function resetTimeAnimation(){
    runningTime.style.animation = 'none'
    runningTime.offssetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.carrossel .lista .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carrossel.classList.add('next')
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carrossel.classList.add('prev')
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(() => {
        proximobtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reseta o tempo corrido da animação

}

// Começa a animação inicial
resetTimeAnimation()