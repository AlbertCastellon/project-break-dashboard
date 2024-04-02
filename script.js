const date = document.querySelector('.date')
const clock = document.querySelector('.clock')
const weather = document.querySelector('.weather')
const body = document.querySelector('body')
const getDate = () => {
    let infoDate = new Date();
    let day = ('0' + infoDate.getDate()).slice(-2);
    let month = ('0' + (infoDate.getMonth() + 1)).slice(-2);
    let year = infoDate.getFullYear();
    let time = infoDate.toLocaleTimeString();
    let frase = fraseHora(time)
    date.innerHTML = `${day}/${month}/${year}`;
    clock.innerHTML = time+ ' ' + frase
    
}
const changeBackground = () => {
    let random = Math.floor(Math.random() * 10)
    url = `url('./img/img${random}.avif')`
    document.body.style.backgroundImage = url
    }
const fraseHora = (hora) => {
    let arr = hora.split(':')
    arr.pop()
    let horaDec = parseInt(arr.join('.'))
    
    if(0 < horaDec <= 7){
        frase = 'Es hora de descansar. Apaga y sigue mañana'
    }else if(7 < horaDec <= 12){
        frase = 'Buenos días, desayuna fuerte y a darle al código'
    }else if(12 < horaDec <= 14){
        frase = 'Echa un rato más pero no olvides comer'
    }else if(14 < horaDec <= 16){
        frase = 'Espero que hayas comido'
    }else if(16 < horaDec <= 18){
        frase = 'Buenas tardes, el último empujón'
    }else if(18 < horaDec <= 22){
        frase = 'Esto ya son horas extras, ... piensa en parar pronto'
    }else if(horaDec > 22 || horaDec === 0){
        frase = 'Buenas noches, es hora de pensar en parar y descansar'
    }
    return frase
}
changeBackground()
setInterval(() => {
    getDate()
}, 1000)
setInterval(() => {
    changeBackground()
}, 15000)
