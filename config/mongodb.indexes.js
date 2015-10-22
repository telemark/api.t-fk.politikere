db.politicians.ensureIndex({'name': 'text', 'committees.name': 'text'}, {'default_language': 'nb'})

db.politicians.ensureIndex({'recno': 1})

db.politicians.ensureIndex({'committeeIds': 1})

db.politicians.ensureIndex({'committees.groupRecno': 1})

db.politicians.ensureIndex({'committees.role': 1})
