const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./src/routes/index')

const db = require('./src/config/db')
db.connect()

app.use(express.static(path.join(__dirname, 'src', 'public')))

// Template Engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// route init
route(app)

app.listen(port, () => console.log('Server is running '))
