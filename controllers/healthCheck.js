const healthCheckRouter = require('express').Router()

healthCheckRouter.get('/', (req, res) => {
  res.status(200).json('ok')
})

module.exports = healthCheckRouter
