const changeBackground = () => {
    let random = Math.floor(Math.random() * 10)
    url = `url('./img/img${random}.avif')`
    document.body.style.backgroundImage = url
    }
    changeBackground()
    setInterval(() => {
        changeBackground()
    }, 15000)
    