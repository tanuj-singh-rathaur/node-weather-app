

let search = document.querySelector('input')
let temp = document.querySelector('#temp')
let windSpeed = document.querySelector("#speed")
let cloud = document.querySelector('#cloud')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const weather = document.querySelector('.weather')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    weather.classList.remove('hide')
    console.log(search.value)
    fetch(`/weather?search=${search.value}`).then((response) => {
        response.json().then((data) => {
            console.log(data)
            temp.textContent = "loading"
            if (data.error) {
                message.textContent = data.error
                temp.textContent = "not available"
                windSpeed.textContent = "not available"
                cloud.textContent = "not available"
            } else {
                temp.textContent = data.main.temp + ' degree celsius'
                windSpeed.textContent = data.wind.speed + ' meters/second'
                cloud.textContent = data.clouds.all + ' percent'
            }
        })
    })
})