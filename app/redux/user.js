

/* -----------------    ACTIONS     ------------------ */
const FETCH_USERS = 'FETCH_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';

// Maybe on campus?
const SET_CAMPUS = 'SET_CAMPUS'


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
        case UPDATE_USER:
        case REMOVE_USER:
    }
}


/* -----------------    DISPATCHERS     ------------------ */

