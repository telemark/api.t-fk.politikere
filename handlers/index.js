'use strict'

function getPoliticians (request, reply) {
  reply('Politicians!')
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

module.exports.getPolitician = getPolitician;

module.exports.getParties = getParties;

module.exports.getParty = getParty;

module.exports.getCommittees = getCommittees;

module.exports.getCommittee = getCommittee;
