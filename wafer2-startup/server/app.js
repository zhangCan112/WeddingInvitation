const initdb = require('./tools/initdb')

initdb.then(() => {
  require('./server')
}, err => {
  console.log(err)
  throw new Error(err)
})
