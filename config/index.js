'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb://localhost:27017/tfk'
}

module.exports = config
