import React, {Component} from 'react';
import {connect} from 'react-redux';
import StudentItem from '../Student/StudentItem';

const CampusDetail = ({campus}) => {
    return (
        <div className="class-detail">
            { campus ?
                <div>
                <h1>{campus.name}</h1>
                <ol>
                    {campus.Students.map(student => {
                    return (
                        <li key={student.id}>
                            <StudentItem student={student} />
                        </li>
                    )
                    })}
                </ol>
                </div>
            :
            null
            }
        </div>
    )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
    console.log('ownProps', ownProps);
    console.log('STATE', state);
    let campus;
    if (state.campus.list) {
        campus = state.campus.list.find((element) => {
            return +element.id === +ownProps.params.id;
        });
    }
    return ({
        campus
    })
}


export default connect(mapState)(CampusDetail);