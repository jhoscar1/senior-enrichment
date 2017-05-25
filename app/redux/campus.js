

/* -----------------    ACTIONS     ------------------ */
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// Maybe on campus?
const SET_STUDENT = 'SET_STUDENT'


/* -----------------    ACTION CREATORS   ------------------ */
const getUsers = users => ({type: FETCH_USERS, users});
const createUser = user => ({type: CREATE_USER, user});
const updateUser = user => ({type: UPDATE_USER, user});
const deleteUser = user => ({type: REMOVE_USER, user});
//const setUserCampus = 


/* -----------------    REDUCER     ------------------ */

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            break;
        case CREATE_USER:
            break;
        case UPDATE_USER:
            break;
        case REMOVE_USER:
            break;
    }
}


/* -----------------    DISPATCHERS     ------------------ */

