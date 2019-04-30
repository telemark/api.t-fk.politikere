[![Build Status](https://travis-ci.org/telemark/api.t-fk.politikere.svg?branch=master)](https://travis-ci.org/telemark/api.t-fk.politikere)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# api.t-fk.politikere

Hapi.js plug-in/standalone for Telemark County Councils politician API.
All politicians/parties/committees are registered in p360 and exported with the [node-export-politicians](https://github.com/telemark/node-export-politicians) module.
The [data/politicians.json](data/politicians.json) file in this repo is the same as [data/mergedData.json](https://github.com/telemark/node-export-politicians/blob/master/data/mergedData.json)

This module handles the API. To keep the information updated you'll need to setup a solution for continuous export/update.

## Prerequisites

You'll need the following installed on your machine

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.org/)

## Installation/setup

Clone the repo

```sh
$ git clone git@github.com:telemark/api.t-fk.politikere.git
```

Make sure you have a MongoDB server running.

Setup the [config](config/index.js) so it matches your environment.

cd into directory and run the setup script to install dependencies and create indexes for the collection.

```sh
$ npm run setup
```

To use it as a standalone server:

```sh
$ npm run start
```

To use it as a plug-in for your existing Hapi-server read the [docs](http://hapijs.com/tutorials/plugins).

## Docker

To import data

```sh
$ mongoimport -h 192.168.99.100:27017 -d tfk -c politicians data/politicians.json --jsonArray
```

To setup indexes

```sh
$ mongo 192.168.99.100:27017/tfk config/mongodb.indexes
```

## License

[MIT](LICENSE)
