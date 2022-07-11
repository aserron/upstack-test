'use strict'
const simple = require('../controllers/simple.controller')
const configured = require('../controllers/configured.controller')
const employees  = require('../controllers/employees.controller')

module.exports = function setup (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts));

  app.use('/employees',employees);
}
