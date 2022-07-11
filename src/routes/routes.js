'use strict'
const simple = require('../controllers/simple.controller')
const configured = require('../controllers/configured.controller')

module.exports = function setup (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
}
