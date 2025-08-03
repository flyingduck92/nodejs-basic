const path = require('path')
const express = require('express')
const expressHandleBars = require('express-handlebars')

const app = express()

/* ejs Templating Engine */
app.set('view engine', 'ejs')
app.set('views', 'views')

/* Handlebars Templating Engine */
// app.engine('.hbs', expressHandleBars.engine({ extname: '.hbs', layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }))
// app.set('view engine', '.hbs')
// app.set('views', './views')

/* Pug Templating Engine */
// app.set('view engine', 'pug')
// app.set('views', 'views')

const { routes: adminRoutes } = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404', { layout: false, pageTitle: 'Page Not Found', path: '' })
})

app.listen(3000)