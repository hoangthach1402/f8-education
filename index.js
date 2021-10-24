const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')

app.use(express.static(path.join(__dirname, 'src/public')))

// Template Engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('home')
})

app.listen(port, () => console.log('Server is running '))
