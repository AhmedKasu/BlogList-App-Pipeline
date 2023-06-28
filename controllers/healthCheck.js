const statusCheck = require('express').Router()
const versionCheck = require('express').Router()

statusCheck.get('/', (req, res) => {
  res.status(200).send('ok')
})

versionCheck.get('/', (req, res) => {
  res.send('1')
})

module.exports = { statusCheck, versionCheck }
