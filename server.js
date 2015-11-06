'use strict'

var Hapi = require('hapi')
var server = new Hapi.Server()
var config = require('./config')
var politicianService = require('./index')

server.connection({
  port: config.SERVER_PORT,
  routes: {
    cors: true
  }
})

server.register([
  {
    register: politicianService,
    options: {}
  },
  require('vision'),
  require('inert'),
  {
    register: require('lout')
  }
], function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err)
  }
})

function startServer () {
  server.start(function () {
    console.log('Server running at:', server.info.uri)
  })
}

function stopServer () {
  server.stop(function () {
    console.log('Server stopped')
  })
}

module.exports.start = startServer

module.exports.stop = stopServer
