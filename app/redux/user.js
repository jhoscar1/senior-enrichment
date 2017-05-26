import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_USERS = 'FETCH_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';

// Maybe on campus?
const SET_CAMPUS = 'SET_CAMPUS'


/* -----------------    ACTION CREATORS   ------------------ */
const get = users => ({type: FETCH_USERS, users});
const create = user => ({type: CREATE_USER, user});
const update = user => ({type: UPDATE_USER, user});
const remove = userId => ({type: REMOVE_USER, userId});
//const setUserCampus = 


/* -----------------    REDUCER     ------------------ */

export default (users = [], action) => {

    switch (action.type) {
        case FETCH_USERS:
            return action.users;
        case CREATE_USER:
            return [action.user, ...users];
        case UPDATE_USER:
            return users.map((user) => {
                return user.id === action.user.id ? action.user : user;
            })
        case REMOVE_USER:
            return users.filter((user) => user.id !== action.userId)
        default:
            return users;
    }
}


/* -----------------    DISPATCHERS     ------------------ */

export const getStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(users => dispatch(get(users)));
}

export const removeStudent = studentId => dispatch => {
    dispatch(remove(studentId));
    axios.delete(`/api/students/${studentId}`)
        .catch(err => console.error(err))
}

export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
    .then(res => res.data)
    .then(createdStudent => {
        dispatch(create(createdStudent));
    })
    .catch(err => console.error(err))
}

export const editStudent = (studentId, newStudentInfo) => dispatch => {
    axios.put(`/api/students/${studentId}`, newStudentInfo)
    .then(res => res.data)
    .then(updatedStudent => dispatch(update(updatedStudent)))
    .catch(err => console.error(err));
}