'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        // For some reason this defaul value is not
        // behaving as I'd expect so handling in a
        // hook but keeping it here for reference
        defaultValue: '../../images/default-planet.jpg'
    }
},
{
    hooks: {
        beforeCreate: (campus) => {
            if (!campus.image) {
                campus.image = '../../images/default-planet.jpg';
            }
        }
    }
});

module.exports = Campus;