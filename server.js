'use strict'

const Hapi = require('@hapi/hapi')
const config = require('./config')
const routes = require('./routes')

// Create a server with a host and port
const server = Hapi.server({
  port: config.SERVER_PORT
})

// Add the routes
server.route(routes)

const plugins = [
  { plugin: require('@hapi/vision') },
  { plugin: require('@hapi/inert') },
  { plugin: require('lout') }
]

// Start the server
async function start () {
  await server.register(plugins)

  await server.start()
  console.log(`server - server running - ${server.info.uri}`)
}

start().catch(error => {
  console.error(`server - ${error}`)
})
