const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.set('view engine', 'pug')
app.set('views', 'views')

const { routes: adminRoutes } = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const pageError = require('./controllers/pageError')

const port = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(pageError.notFound)

app.listen(port, () => console.log(`App running on http://localhost:${port}`))