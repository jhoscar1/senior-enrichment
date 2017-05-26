import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { removeStudent } from '../../redux/user';


const StudentItem = ({student, removeStudent}) => {
    return (
        <div className="student-item">
            <div>
                <h3><Link to={`/students/${student.id}`}>{student.name}</Link></h3>
                <h4>Campus: {student.campus.name}</h4>
                <p>{student.email}</p>

                <button
                className="btn btn-default btn-xs"
                onClick={() => removeStudent(student.id)}>
                X
                </button>
            </div>
        </div>
    )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = {removeStudent};


export default connect(mapState, mapDispatch)(StudentItem);