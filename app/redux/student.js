import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_USERS = 'FETCH_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';



/* -----------------    ACTION CREATORS   ------------------ */
const get = students => ({type: FETCH_USERS, students});
const create = student => ({type: CREATE_USER, student});
const update = student => ({type: UPDATE_USER, student});
const remove = studentId => ({type: REMOVE_USER, studentId});
//const setUserCampus = 


/* -----------------    REDUCER     ------------------ */

export default (students = [], action) => {

    switch (action.type) {
        case FETCH_USERS:
            return action.students;
        case CREATE_USER:
            return [action.user, ...students];
        case UPDATE_USER:
            return students.map((student) => {
                return student.id === action.student.id ? action.student : student;
            })
        case REMOVE_USER:
            return students.filter((student) => student.id !== action.studentId)
        default:
            return students;
    }
}


/* -----------------    DISPATCHERS     ------------------ */

export const getStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(get(students)));
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