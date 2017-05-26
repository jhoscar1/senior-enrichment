'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Student = db.define('student', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Student;
