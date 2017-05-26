const db = require('./db');
const {Student, Campus} = require('./db/models');
const Promise = require('bluebird');


const data = {
    campus: [
        {name: "Saturn"},
        {name: "Mars"},
        {name: "Jupiter"}
    ],
    students: [
        {name: 'JSON Oscar', email: 'test@test.com', campusId: 1},
        {name: 'Blurpp Frank', email: 'test@test.biz', campusId: 1},
        {name: 'Jurgen Dropper', email: 'test@test.net', campusId: 1},
        {name: 'Gilgamesh Barf', email: 'test@test.gov', campusId: 1},
        {name: 'Betty Burp', email: 'test@cool.com', campusId: 2},
        {name: 'Tina Sterner', email: 'test@yay.biz', campusId: 2}
    ]
};

// db.sync({force: true})
// .then(() => {
//     const userData = data.user.map((user) => {
//         return User.create(user);
//     });

//     const campusData = data.campus.map((campus) => {
//         return Campus.create(campus);
//     })
//     return Promise.all([userData, campusData])
// })
// .then(([users, campuses]) => {
//     return [users, campuses];
// })
// .catch(console.error)
// .finally(() => {
//     db.close();
//     return null;
// })



db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  const addingCampuses = Promise.map(data.campus, function (campus) {
    return Campus.create(campus);
  });

  return  addingCampuses;

})
.then(function () {
  console.log('Finished inserting data');
  const addingStudents = Promise.map(data.students, function (student) {
    return Student.create(student);
  })
  return addingStudents;

})
.catch(function (err) {
  console.error('Sequelize is evil', err, err.stack);
})
.finally(function () {
  db.close(); // creates but does not return a promise
  return null; // stops bluebird from complaining about un-returned promise
});
