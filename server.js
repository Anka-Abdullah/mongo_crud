require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./src/db/connection')

const app = express()

app.use(morgan('tiny')) //log request
connectDB() //MongoDB connection
app.use(bodyParser.urlencoded({ extended: true })) //parse request to body-parser
app.set('view engine', 'ejs') //set view engine

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// load routers
app.use('/', require('./src/routes/router'))

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
