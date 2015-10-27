'use strict'

var mongojs = require('mongojs')
var config = require('../config')
var db = mongojs(config.DB_CONNECTION)
var politicians = db.collection('politicians')

function getPoliticians (request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20
  politicians.find({}).skip(skipNum).limit(limitNum, function findPoliticians (error, data) {
    reply(error || data)
  })
}

function searchPoliticians (request, reply) {
  politicians.find({'$text': {'$search': request.params.searchText}},
    function findPoliticiansBySearch (error, data) {
      reply(error || data)
    }
  )
}

function getPolitician (request, reply) {
  var pID = parseInt(request.params.politicianID, 10)
  politicians.find({'recno': pID},
    function findPolitician (error, data) {
      reply(error || data)
    }
  )
}

function getParties (request, reply) {
  politicians.aggregate([
    {'$unwind': '$committees'},
      {'$match': {'committees.role': 'Parti'}},
      {'$group': {
        '_id': '$committees.groupRecno',
        'name': {'$first': '$committees.name'},
        'address': {'$first': '$committees.address'},
        'place': {'$first': '$committees.place'},
        'zip': {'$first': '$committees.zip'},
        'mail': {'$first': '$committees.mail'},
        'tlf': {'$first': '$committees.tlf'},
        'url': {'$first': '$committees.url'}
      }}
  ],
    function aggregatePartiesResult (error, data) {
      reply(error || data)
    }
  )
}

function getParty (request, reply) {
  var pID = parseInt(request.params.partyID, 10)
  politicians.aggregate([
      {'$unwind': '$committees'},
      {'$match': {'committees.groupRecno': pID}},
      {'$group': {
        '_id': '$committees.groupRecno',
        'name': {'$first': '$committees.name'},
        'address': {'$first': '$committees.address'},
        'place': {'$first': '$committees.place'},
        'zip': {'$first': '$committees.zip'},
        'mail': {'$first': '$committees.mail'},
        'tlf': {'$first': '$committees.tlf'},
        'url': {'$first': '$committees.url'}
      }}
  ],
    function aggregatePartyResult (error, data) {
      reply(error || data)
    }
  )
}

function getPartyMembers (request, reply) {
  var pID = parseInt(request.params.partyID, 10)
  politicians.find({'committees.groupRecno': pID},
    function findPartyMembers (error, data) {
      reply(error || data)
    }
  )
}

function getCommittees (request, reply) {
  politicians.aggregate([
      {'$unwind': '$committees'},
      {'$match': {'committees.role': {'$ne': 'Parti'}}},
      {'$group': {
        '_id': '$committees.groupRecno',
        'name': {'$first': '$committees.name'},
        'address': {'$first': '$committees.address'},
        'place': {'$first': '$committees.place'},
        'zip': {'$first': '$committees.zip'},
        'mail': {'$first': '$committees.mail'},
        'tlf': {'$first': '$committees.tlf'},
        'url': {'$first': '$committees.url'}
      }}
  ],
    function aggregateCommitteesResult (error, data) {
      reply(error || data)
    }
  )
}

function getCommittee (request, reply) {
  var cID = parseInt(request.params.committeeID, 10)
  politicians.aggregate([
      {'$unwind': '$committees'},
      {'$match': {'committees.groupRecno': cID}},
      {'$group': {
        '_id': '$committees.groupRecno',
        'name': {'$first': '$committees.name'},
        'address': {'$first': '$committees.address'},
        'place': {'$first': '$committees.place'},
        'zip': {'$first': '$committees.zip'},
        'mail': {'$first': '$committees.mail'},
        'tlf': {'$first': '$committees.tlf'},
        'url': {'$first': '$committees.url'}
      }}
  ],
    function aggregateCommitteeResult (error, data) {
      reply(error || data)
    }
  )
}

function getCommitteeMembers (request, reply) {
  var cID = parseInt(request.params.committeeID, 10)
  politicians.find({'committees.groupRecno': cID},
    function findCommitteeMembersResult (error, data) {
      reply(error || data)
    }
  )
}

module.exports.getPoliticians = getPoliticians

module.exports.searchPoliticians = searchPoliticians

module.exports.getPolitician = getPolitician

module.exports.getParties = getParties

module.exports.getParty = getParty

module.exports.getPartyMembers = getPartyMembers

module.exports.getCommittees = getCommittees

module.exports.getCommittee = getCommittee

module.exports.getCommitteeMembers = getCommitteeMembers
