import React, {Component} from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import Root from './Root.jsx';
import {getCampuses, getCampus} from '../redux/campus';
import {getStudents} from '../redux/user';
import CampusList from './Campus/CampusList';
import CampusDetail from './Campus/CampusDetail';
import StudentList from './Student/StudentList';
import StudentDetail from './Student/StudentDetail';


const Routes = ({fetchData, onCampusEnter}) => (
    <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={fetchData} >
            <IndexRedirect to="/campuses" />
            <Route path="campuses" component={CampusList} />
            <Route path="campuses/:id" component={CampusDetail} onEnter={onCampusEnter} />
            <Route path="students" component={StudentList} />
            <Route path="students/:id" component={StudentDetail} />
        </Route>
    </Router>
)



const mapState = null;
const mapDispatch = dispatch => ({
    fetchData: () => {
        dispatch(getCampuses());
        dispatch(getStudents());
    },
    onCampusEnter: (nextState) => {
        const campusId = nextState.params.id;
        dispatch(getCampus(campusId));
    }
})

export default connect(mapState, mapDispatch)(Routes);