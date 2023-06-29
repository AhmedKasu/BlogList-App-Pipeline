const statusCheck = require('express').Router()
const versionCheck = require('express').Router()

statusCheck.get('/', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.status(200).send('ok')
})

versionCheck.get('/', (req, res) => {
  res.send('2')
})

module.exports = { statusCheck, versionCheck }
