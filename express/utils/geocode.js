const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGFudWotMTIiLCJhIjoiY2theXRlNm5uMDM4cDJ5bG9kMG93ZDltbCJ9.AeTDiYTM0fvZYcKX6T24Bg'
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error)
            callback('unable to connect check the network connection or the services are not available right now')
        else if (response.body.features.length === 0)
            callback('please provide a valid location', undefined)
        else
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name

            })

    })

}
module.exports = geocode