const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('In the middleware')
  next() // allowed request to next one middleware
})

app.use((req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Hello from express</h1>')
})

app.listen(3000)