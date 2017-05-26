import React, {Component} from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import {connect} from 'react-redux';
import Root from './Root.jsx';
import {getCampuses, getCampus} from '../redux/campus';
import {getStudents} from '../redux/user';
import CampusList from './Campus/CampusList';
import CampusDetail from './Campus/CampusDetail';
import StudentList from './Student/StudentList';


const Routes = ({fetchData, onCampusEnter}) => (
    <Router history={hashHistory}>
        <Route path="/" component={Root} onEnter={fetchData} >
            <IndexRedirect to="/campuses" />
            <Route path="campuses" component={CampusList} />
            <Route path="campuses/:id" component={CampusDetail} onEnter={onCampusEnter} />
            <Route path="students" component={StudentList} />
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