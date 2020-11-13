// this js file is used as the entry point of the application

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Routes Configuration
const currentWeatherRoutes = require('./routes/current-weather-api');


// app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


// Port definition for system and default initialization 
const port = process.env.PORT || 3000;


// Path Configuration of public and static directory
const publicDir = path.join(__dirname, './public');

// Path Configuration of template directory
const viewsPath = path.join(__dirname, './views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.use(express.static(publicDir));

app.use('/current-weather', currentWeatherRoutes)

app.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Weather App'
    })
})

app.get('/home', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Weather App'
    })
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Weather App',
        msg: 'Oops! You are trying to hit a wrong URL.'
    })
})

app.listen(port, () => {
    console.log('Server is up and running on port :', port)
})