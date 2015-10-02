'use strict'

var mongojs = require('mongojs');
var config = require('../config');
var db = mongojs(config.DB);
var politicians = db.collection('politicians');

function handleReply(error, data) {
  return error ? error:data
}

function getPoliticians (request, reply) {
  reply('Politicians!')
}

function searchPoliticians (request, reply) {
  politicians.find({'$text':{'$search':request.params.searchText}},
    function(error, data) {
      if (error) {
        reply(error)
      } else {
        reply(data)
      }
    })
}

function getPolitician (request, reply) {
  reply('Politician!')
}

function getParties (request, reply) {
  reply('Parties!')
}

function getParty (request, reply) {
  reply('Party!')
}

function getCommittees (request, reply) {
  reply('Committees!')
}

function getCommittee (request, reply) {
  reply('Committee!')
}

module.exports.getPoliticians = getPoliticians;

module.exports.searchPoliticians = searchPoliticians;

module.exports.getPolitician = getPolitician;

module.exports.getParties = getParties;

module.exports.getParty = getParty;

module.exports.getCommittees = getCommittees;

module.exports.getCommittee = getCommittee;
