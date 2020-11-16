const request = require('request');
const https = require('https');
const constants = require('../config');


// const openWeatherData = (address, callback) => {
//     return new Promise((resolve, reject) => {
//         // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//         const url = constants.currentWeather.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.currentWeather.SECRET_KEY;
//         console.log(url);


//         request({ url, json: true }, (error, response, body) => {
//             console.log("body", body);
//             if (error) {
//                 callback("Oops!! Open Weather API is not responding! ", undefined)
//             } else {
//                 resolve(body)
//             }
//         })
//     })
// }

// module.exports = openWeatherData;

exports.getDataByName = (address, callback) => {
    return new Promise((resolve, reject) => {
        // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        const url = constants.BASE_URL + 'q=' + encodeURIComponent(address) + '&appid=' + constants.SECRET_KEY;
        console.log(url);


        request({ url, json: true }, (error, response, body) => {
            console.log("body", body);
            if (error) {
                callback("Oops!! Open Weather API is not responding! ", undefined)
            } else {
                resolve(body)
            }
        })
    })
}

exports.getDataById = (address, callback) => {
    return new Promise((resolve, reject) => {
        // api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
        const url = constants.BASE_URL + 'id=' + encodeURIComponent(address) + '&appid=' + constants.SECRET_KEY;
        console.log(url);


        request({ url, json: true }, (error, response, body) => {
            console.log("body", body);
            if (error) {
                callback("Oops!! Open Weather API is not responding! ", undefined)
            } else {
                resolve(body)
            }
        })
    })
}


exports.getDataByGeoCoordinates = (lat, lon, callback) => {
    return new Promise((resolve, reject) => {
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const url = constants.BASE_URL + 'lat=' + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lon) + '&appid=' + constants.SECRET_KEY;
        console.log(url);


        request({ url, json: true }, (error, response, body) => {
            console.log("body", body);
            if (error) {
                callback("Oops!! Open Weather API is not responding! ", undefined)
            } else {
                resolve(body)
            }
        })
    })
}


exports.getDataByZipCountryCode = (zip, country, callback) => {
    return new Promise((resolve, reject) => {
        // api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
        const url = constants.BASE_URL + 'zip=' + encodeURIComponent(zip) + ',' + encodeURIComponent(country) + '&appid=' + constants.SECRET_KEY;
        console.log(url);


        request({ url, json: true }, (error, response, body) => {
            console.log("body", body);
            if (error) {
                callback("Oops!! Open Weather API is not responding! ", undefined)
            } else {
                resolve(body)
            }
        })
    })
}

 