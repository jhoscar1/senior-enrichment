'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const User = require('./user');

const Campus = db.define('campus', {
    name: Sequelize.STRING
});

Campus.hasMany(User);

module.exports = Campus;