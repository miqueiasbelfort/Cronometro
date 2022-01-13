"use strict" 
/*
O use strict e uma forma mais segura de se escrever o 
JavaScript pois ele manda muito mais erros 
caso tente fazer algo não seguro, 
não otimizado ou não padrão.
*/

let hora = 0
let minuto = 0
let segundo = 0
let millisecond = 0
let cronometro;

document.form_main.start.onclick = () => start()
document.form_main.stop.onclick = () => stop()
document.form_main.reset.onclick = () => reset()

function start(){
    stop();
    cronometro = setInterval(() => {
        time() //funação que sera excultado a cada milesegundo
        // console.log(segundo)
    }, 10) // 1000ms = 1s
}

function stop(){
    clearInterval(cronometro) //ClearInterval para a função interval
}

function reset(){
    hora = 0
    minuto = 0
    segundo = 0
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second').innerText = '00'
}

function time(){

    if ((millisecond += 10) == 1000) {
        millisecond = 0
        segundo++
    } else if (segundo == 60){
        segundo = 0
        minuto++
        alert('Quanto tempo vc vai ficar aki ainda? 😒')
    } else if (minuto == 60){
        minuto = 0
        hora++
    }
    document.getElementById('hour').innerText = returnData(hora);
    document.getElementById('minute').innerText = returnData(minuto);
    document.getElementById('second').innerText = returnData(segundo);
}

function returnData(input){
    
    /*if (input >= 10){
        return input
    } else {
        return `0${input}`
    }*/
     return input >= 10 ? input : `0${input}`
}

