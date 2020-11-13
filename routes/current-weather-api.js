const express = require('express');

const currentWeatherData = require('../util/currentWeatherData');

const router = express.Router();

// Search by City Name

router.post('/city-name', (req, res, next) => {
    var cityName = req.body.cityName;
    console.log('body: ' + cityName);

    if (!cityName) {
        res.render('current-weather/city-name', {
            msg: "Oops! It looks like you have't enter the city name.",
            code: true,
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataByName(cityName).then((response) => {
        // console.log('res: ', response);
        res.render('current-weather/city-name', {
            code: false,
            data: response,
            pageTitle: 'Weather Report'
        })
    })
})

router.get('/city-name', (req, res, next) => {
        res.render('current-weather/city-name', {
            msg: "Oops! It looks like you have't enter the city name.",
            code: true,
            pageTitle: 'Weather Report'
    })
})


// Search by City Id

router.post('/city-id', (req, res, next) => {
    var cityId = req.body.cityId;
    console.log('body: ' + cityId);

    if (!cityId) {
        res.render('current-weather/city-id', {
            msg: "Oops! It looks like you have't enter the city id.",
            code: true,
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataById(cityId).then((response) => {
        // console.log('res: ', response);
        res.render('current-weather/city-id', {
            code: false,
            data: response,
            pageTitle: 'Weather Report'
        })
    })
})

router.get('/city-id', (req, res, next) => {
    res.render('current-weather/city-id', {
        msg: "Oops! It looks like you have't enter the city id.",
        code: true,
        pageTitle: 'Weather Report'
    })
})

// Search by Geo coordinates

router.post('/geo-coordinates', (req, res, next) => {
    var lat = req.body.lat;
    var lon = req.body.lon;

    if (!lat || !lon) {
        res.render('current-weather/geo-coordinates', {
            msg: "Oops! It looks like you have't enter the Geo Coordinates.",
            code: true,
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataByGeoCoordinates(lat, lon).then((response) => {
        // console.log('res: ', response);
        res.render('current-weather/geo-Coordinates', {
            code: false,
            data: response,
            pageTitle: 'Weather Report'
        })
    })
})

router.get('/geo-coordinates', (req, res, next) => {
    res.render('current-weather/geo-coordinates', {
        msg: "Oops! It looks like you have't enter the geo coordinates.",
        code: true,
        pageTitle: 'Weather Report'
    })
})



module.exports = router;