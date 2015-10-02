'use strict'

var mongojs = require('mongojs')
var config = require('./config')
var db = mongojs(config.DB)
var politicians = db.collection('politicians')
var textIndexFields = {
  'name': 'text',
  'committees.name': 'text'
}
var jobsDone = 0
var jobsToDo = 5

function areWeDoneYet() {
  jobsDone++
  if (jobsDone === jobsToDo) {
    console.log('Everything\'s shiny, Cap\'n. Not to fret.')
    process.exit(0)
  }
}

politicians.ensureIndex(textIndexFields, {'default_language': 'nb'}, function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log('TextIndex created')
      console.log(data)
    }
    areWeDoneYet()
})

politicians.ensureIndex({'recno': 1}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log('Index OK for recno')
    console.log(data)
    areWeDoneYet()
  }
})

politicians.ensureIndex({'committeeIds': 1}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log('Index OK for committeeIds')
    console.log(data)
    areWeDoneYet()
  }
})

politicians.ensureIndex({'committees.groupRecno': 1}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log('Index OK for groupRecno')
    console.log(data)
    areWeDoneYet()
  }
})

politicians.ensureIndex({'committees.role': 1}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log('Index OK for role')
    console.log(data)
    areWeDoneYet()
  }
})
