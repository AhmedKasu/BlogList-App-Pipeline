const info = (...params) => {
  if (process.env !== 'test') console.log(...params) // eslint-disable-line no-console
}

const error = (...params) => {
  if (process.env !== 'test') console.error(...params) // eslint-disable-line no-console
}

module.exports = {
  info,
  error,
}
