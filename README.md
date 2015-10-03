[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# api.t-fk.politikere
Hapi.js plug-in/standalone for Telemark County Councils politician API

## Prerequisites

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.org/)

## Installation/setup

Clone the repo

```sh
$ git clone git@github.com:telemark/api.t-fk.politikere.git
```

Make sure you have a MongoDB server running.

cd into directory and run the setup script to install dependencies and create indexes for the collection

```sh
$ npm run setup
```

To use it as a standalone server

```sh
$ npm run start
```

To use it as a plug-in for your existing Hapi-server read the [docs](http://hapijs.com/tutorials/plugins).