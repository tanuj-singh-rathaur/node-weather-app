const request = require("request")

const weather = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&APPID=0bea24afa3ff220f1a2015a0ac4b7c4d'
    request({ url: url, json: true }, (error, response) => {
        if (error)
            callback('unable to connect to the weather services', undefined)
        else
            callback(undefined, response.body)
    })

}
module.exports = weather
