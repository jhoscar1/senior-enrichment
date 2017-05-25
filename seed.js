const db = require('./db');
const {User, Campus} = require('./db/models');
const Promise = require('bluebird');


const data = {
    campus: [
        {name: "Saturn", createdAt: Date.now(), updatedAt: Date.now()},
        {name: "Mars", createdAt: Date.now(), updatedAt: Date.now()},
        {name: "Jupiter", createdAt: Date.now(), updatedAt: Date.now()}
    ],
    user: [
        {name: 'JSON Oscar', email: 'test@test.com', createdAt: Date.now(), updatedAt: Date.now()},
        {name: 'Blurpp Frank', email: 'test@test.biz', createdAt: Date.now(), updatedAt: Date.now()},
        {name: 'Jurgen Dropper', email: 'test@test.net', createdAt: Date.now(), updatedAt: Date.now()},
        {name: 'Gilgamesh Barf', email: 'test@test.gov', createdAt: Date.now(), updatedAt: Date.now()},
        {name: 'Betty Burp', email: 'test@cool.com', createdAt: Date.now(), updatedAt: Date.now()},
        {name: 'Tina Sterner', email: 'test@yay.biz', createdAt: Date.now(), updatedAt: Date.now()}
    ]
};

db.sync({force: true})
.then(() => {
    const userData = data.user.map((user) => {
        return User.create(user);
    });

    const campusData = data.campus.map((campus) => {
        return Campus.create(campus);
    })
    return Promise.all([userData, campusData])
})
.then((blah) => {
    console.log(blah);
    console.log('Please work');
})
.catch(console.error);
