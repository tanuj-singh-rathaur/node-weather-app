const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const port = process.env.PORT || 3000
const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicPath))

hbs.registerPartials(partialsPath)
app.get('', (req, res) => {
    res.render('index')

})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/help', (req, res) => {
    res.render('help')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {

    if (!req.query.search)
        res.send({ error: "you must provide an address" })

    else {
        geocode(req.query.search, (error, geodata) => {
            if (error)
                res.send({ Error: error })
            else {
                weather(geodata.longitude, geodata.latitude, (error, weatherdata) => {
                    if (error)
                        res.send({ error: error })
                    else
                        res.send(weatherdata)
                })
            }

        })

    }
})
app.listen(port, () => {
    console.log("the server is running on port 3000 ")
})