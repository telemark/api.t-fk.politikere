'use strict'

var mongojs = require('mongojs');
var config = require('../config');
var db = mongojs(config.DB);
var politicians = db.collection('politicians');

function getPoliticians (request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0;
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20;
  politicians.find({}).skip(skipNum).limit(limitNum, function(error, data) {
    reply(error ? error:data)
  });
}

function searchPoliticians (request, reply) {
  politicians.find({'$text': {'$search': request.params.searchText}},
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

function getPolitician (request, reply) {
  var pID = parseInt(request.params.politicianID, 10)
  politicians.find({'recno': pID},
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

function getParties (request, reply) {
  politicians.aggregate([
    {'$unwind': '$committees'},
      {'$match': {'committees.role': 'Parti'}},
      {'$group': {'_id': '$committees.groupRecno'}},
  ],
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

function getParty (request, reply) {
  var pID = parseInt(request.params.partyID, 10)
  politicians.find({'committees.groupRecno': pID},
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

function getCommittees (request, reply) {
  politicians.find({'committees.role': 'Parti'},
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

function getCommittee (request, reply) {
  var cID = parseInt(request.params.committeeID, 10)
  politicians.find({'committees.groupRecno': cID},
    function(error, data) {
      reply(error ? error:data)
    }
  )
}

module.exports.getPoliticians = getPoliticians;

module.exports.searchPoliticians = searchPoliticians;

module.exports.getPolitician = getPolitician;

module.exports.getParties = getParties;

module.exports.getParty = getParty;

module.exports.getCommittees = getCommittees;

module.exports.getCommittee = getCommittee;
