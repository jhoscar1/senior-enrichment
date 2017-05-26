import axios from 'axios';
import {browserHistory} from 'react-router';
/* -----------------    ACTIONS     ------------------ */
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const SELECT_CAMPUS = 'SELECT_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';


/* -----------------    ACTION CREATORS   ------------------ */
const get = campuses => ({type: FETCH_CAMPUSES, campuses});
const getOne = campus => ({type: SELECT_CAMPUS, campus});
const create = campus => ({type: CREATE_CAMPUS, campus});
const update = campus => ({type: UPDATE_CAMPUS, campus});
const remove = campusId => ({type: REMOVE_CAMPUS, campusId});


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
            newState.list = [action.campus, ...newState.list];
            return newState;

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
            newState.list = newState.list.filter((campus) => (
                campus.id !== action.id
            ))
            return newState;
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
    .catch((err) => console.error('Fetching campuses unsuccessful', err))
}

export const getCampus = id => dispatch => {
    axios.get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(campus => dispatch(getOne(campus)))
    .catch(err => console.error('Fetching campus unsuccessful', err));
};

export const addCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(createdCampus => {
        console.log(createdCampus);
        dispatch(create(createdCampus))
    })
    .catch(err => console.error(err));
}

export const removeCampus = id => dispatch => {
    dispatch(remove(id))
    axios.delete(`/api/campuses/${id}`)
    .then(() => dispatch(getCampuses()))
    .then(() => browserHistory.push('/campuses'))
    .catch(err => console.error(err));
}

export const editCampus = (id, campus) => dispatch => {
    axios.put(`/api/campuses/${id}`, campus)
    .then(res => res.data)
    .then((updatedCampus) => {
        dispatch(update(updatedCampus));
    })
}