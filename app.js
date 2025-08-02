const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const { routes: adminRoutes } = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404', { docTitle: 'Page Not Found' })
})

app.listen(3000)