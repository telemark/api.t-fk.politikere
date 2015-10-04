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
    path: '/politicians/search/{searchText}',
    config: {
      handler: handlers.searchPoliticians
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
    path: '/party/{partyID}/members',
    config: {
      handler: handlers.getPartyMembers
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
  },
  {
    method: 'GET',
    path: '/committee/{committeeID}/members',
    config: {
      handler: handlers.getCommitteeMembers
    }
  }
]

module.exports = routes
