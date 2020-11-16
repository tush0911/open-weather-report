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
            cod: '03',
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataByName(cityName).then((response) => {
        // console.log('res: ', response);
        if (response.cod == "200") {
            res.render('current-weather/city-name', {
                cod: response.cod,
                data: response,
                pageTitle: 'Weather Report'
            })
        } else {
            res.render('current-weather/city-name', {
                cod: response.cod,
                msg: response.message,
                pageTitle: 'Error: Weather Report'
            })
        }

    })
})

router.get('/city-name', (req, res, next) => {
    res.render('current-weather/city-name', {
        cod: '02',
        msg: "Enter the city name.",
        pageTitle: 'Weather Report'
    })
})


// Search by City Id

router.post('/city-id', (req, res, next) => {
    var cityId = req.body.cityId;
    console.log('body: ' + cityId);

    if (!cityId) {
        res.render('current-weather/city-id', {
            cod: '03',
            msg: "Oops! It looks like you have't enter the city id.",
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataById(cityId).then((response) => {
        // console.log('res: ', response);
        if (response.cod == "200") {
            res.render('current-weather/city-id', {
                cod: response.cod,
                data: response,
                pageTitle: 'Weather Report'
            })
        } else {
            res.render('current-weather/city-id', {
                cod: response.cod,
                msg: response.message,
                pageTitle: 'Error: Weather Report'
            })
        }


    })
})

router.get('/city-id', (req, res, next) => {
    res.render('current-weather/city-id', {
        msg: "Enter the city id.",
        cod: '02',
        pageTitle: 'Weather Report'
    })
})

// Search by Geo coordinates

router.post('/geo-coordinates', (req, res, next) => {
    var lat = req.body.lat;
    var lon = req.body.lon;

    if (!lat || !lon) {
        res.render('current-weather/geo-coordinates', {
            cod: '03',
            msg: "Oops! It looks like you have't enter the Geo Coordinates.",
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataByGeoCoordinates(lat, lon).then((response) => {
        // console.log('res: ', response);
        if (response.cod == "200") {
            res.render('current-weather/geo-Coordinates', {
                cod: response.cod,
                data: response,
                pageTitle: 'Weather Report'
            })
        } else {
            res.render('current-weather/geo-Coordinates', {
                cod: response.cod,
                msg: response.messsge,
                pageTitle: 'Error: Weather Report'
            })
        }

    })
})

router.get('/geo-coordinates', (req, res, next) => {
    res.render('current-weather/geo-coordinates', {
        msg: "Enter the geo coordinates.",
        cod: '02',
        pageTitle: 'Weather Report'
    })
})

// Search by Zip Code and Country Code

router.post('/zip-country-code', (req, res, next) => {
    var zip = req.body.zip;
    var country = req.body.country;

    if (!zip || !country) {
        res.render('current-weather/zip-country-code', {
            msg: "Oops! It looks like you have't enter the Zip Code or Country Code.",
            cod: '03',
            pageTitle: 'Weather Report'
        })
    }

    currentWeatherData.getDataByZipCountryCode(zip, country).then((response) => {
        // console.log('res: ', response);
        if (response.cod == "200") {
            res.render('current-weather/zip-country-code', {
                cod: response.cod,
                data: response,
                pageTitle: 'Weather Report - By Zip Code and Country Code'
            })
        } else {
            res.render('current-weather/zip-country-code', {
                msg: response.message,
                cod: response.cod,
                pageTitle: 'Error: Weather Report - By Zip Code and Country Code'
            })
        }

    })
})

router.get('/zip-country-code', (req, res, next) => {
    res.render('current-weather/zip-country-code', {
        msg: "Enter the zip code & country code.",
        cod: '02',
        pageTitle: 'Weather Report'
    })
})



module.exports = router;