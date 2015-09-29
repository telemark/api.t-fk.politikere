'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/politicians',
    config: {
      handler: handlers.getPoliticians
    }
  },
  {
    method: 'GET',
    path: '/politician/{politicianID}',
    config: {
      handler: handlers.getPolitician
    }
  },
  {
    method: 'GET',
    path: '/parties',
    config: {
      handler: handlers.getParties
    }
  },
  {
    method: 'GET',
    path: '/party/{partyID}',
    config: {
      handler: handlers.getParty
    }
  },
  {
    method: 'GET',
    path: '/committees',
    config: {
      handler: handlers.getCommittees
    }
  },
  {
    method: 'GET',
    path: '/committee/{committeeID}',
    config: {
      handler: handlers.getCommittee
    }
  }
]

module.exports = routes