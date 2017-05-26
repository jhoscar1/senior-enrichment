import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const SELECT_CAMPUS = 'SELECT_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// Maybe on campus?
const SET_STUDENT = 'SET_STUDENT'


/* -----------------    ACTION CREATORS   ------------------ */
const get = campuses => ({type: FETCH_CAMPUSES, campuses});
const getOne = campus => ({type: SELECT_CAMPUS, campus});
const create = campus => ({type: CREATE_CAMPUS, campus});
const update = campus => ({type: UPDATE_CAMPUS, campus});
const remove = campus => ({type: REMOVE_CAMPUS, campus});


/* -----------------    REDUCER     ------------------ */

const initialState = {
    list: [],
    selected: {}
}

const reducer = (state = initialState, action) => {
    
    const newState = Object.assign({}, state);

    switch (action.type) {
        case FETCH_CAMPUSES:
            newState.list = action.campuses;
            return newState;
        case SELECT_CAMPUS:
            newState.selected = action.campus;
            return newState;
        case CREATE_CAMPUS:
            break;
        case UPDATE_CAMPUS:
            newState.list = newState.list.map((campus) => {
                if (campus.id === action.campus.id) {
                    return action.campus
                }
                else {
                    return campus;
                }
            })
            return newState;
        case REMOVE_CAMPUS:
            break;
        default:
            return state;
    }
}

export default reducer;

/* -----------------    DISPATCHERS     ------------------ */

export const getCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(get(campuses)))
    .catch(() => console.error('Fetching campuses unsuccessful'))
}

export const getCampus = (id) => dispatch => {
    axios.get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(campus => dispatch(getOne(campus)))
    .catch(err => console.error('Fetching campus unsuccessful', err));
};