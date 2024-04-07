const urlBase = 'https://api.weatherapi.com/v1'
const apiKey = '9482d5114e6644e8aed202454240704'
const ciudad = 'barcelona'
const weather = document.querySelector('.weather')
const prevision = document.createElement('div')
const weatherToday = document.querySelector('.weather-today')
prevision.classList.add('prevision')
const obtenerInfo = () => {
    fetch(`${urlBase}/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`).then((response) => {
        if (!response){
            throw new Error('Respuesta no conseguida')
        }

        return response.json()
        
    }).then((data) => {
        
        const img = document.createElement('img') 
        img.src = data.current.condition.icon
        const skyCondition = document.createElement('p')
        const temperature = document.createElement('p')
        skyCondition.innerHTML = data.current.condition.text
        temperature.innerHTML = data.current.temp_c + ' ºC'
        const ul = document.createElement('ul')
        const precip = document.createElement('li')
        const humidity = document.createElement('li')
        const wind = document.createElement('li')
        precip.innerHTML = 'Precipitaciones: ' + data.current.precip_mm  + ' mm'
        humidity.innerHTML = 'Humedad: ' + data.current.humidity + '%'
        wind.innerHTML = 'Viento: ' + data.current.wind_kph + ' km/h'
        ul.append(precip, humidity, wind)
        weatherToday.append(img, /*skyCondition,*/ temperature, ul)

        return data.forecast

    }).then((forecast) => {
        console.log(forecast.forecastday[0].hour)
        forecast.forecastday[0].hour.forEach(element => {
            const div = document.createElement('div')
            const hora = document.createElement('p')
            const img = document.createElement('img')
            const temp = document.createElement('p')
            hora.innerHTML = element.time.slice(-5)
            img.src = element.condition.icon
            temp.innerHTML = element.temp_c + ' ºC'
            div.append(hora, img, temp)
            prevision.appendChild(div)
        });
        weather.appendChild(prevision)
    })
}
obtenerInfo()