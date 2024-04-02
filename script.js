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
    let arr = time.split(':').map(element => parseInt(element))
    console.log(arr)
    date.innerHTML = `${day}/${month}/${year}`;
    clock.innerHTML = time
    
}
const changeBackground = () => {
    let random = Math.floor(Math.random() * 10)
    url = `url('./img/img${random}.avif')`
    document.body.style.backgroundImage = url
    }
const fraseHora = () => {
    let arr = time.split(':')
    let arr2 = arr.map(element => parseInt(element))
    console.log(arr2)
}
/*setInterval(() => {
    getDate()
}, 1000)*/
setInterval(() => {
    changeBackground()
}, 15000)
getDate()