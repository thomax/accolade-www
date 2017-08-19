import express from 'express'
const router = express()
import Accolade from 'accolade'
import config from '../config/app.json'
const accolade = Accolade(config)

router.get('/', (req, res) => {
  res.send('Accolade sez hello')
})

router.post('/rate', (req, res) => {
  const match = accolade.createMatch(req.body)
  const result = match.rate()
  res.status(200).type('application/json').send(JSON.stringify(result, null, 2))
})

router.post('/quality', (req, res) => {
  const match = accolade.createMatch(req.body)
  const result = match.quality()
  res.status(200).type('application/json').send(JSON.stringify(result, null, 2))
})

module.exports = router
