import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import routes from './routes'
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost: ${app.get('port')}`)
})

module.exports = app
