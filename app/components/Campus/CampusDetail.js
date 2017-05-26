import React, {Component} from 'react';
import {connect} from 'react-redux';
import StudentItem from '../Student/StudentItem';
import {removeCampus} from '../../redux/campus';
import EditCampus from './EditCampus';

class CampusDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleForm = this.toggleForm.bind(this)
    }

    toggleForm() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {campus, students, removeCampus} = this.props;
        return (
            <div className="class-detail">
                { campus && students ?
                    <div>
                        <div>
                            <button
                                className="btn btn-default"
                                onClick={this.toggleForm}
                            >
                            { !this.state.open ? <span className="glyphicon glyphicon-plus" /> : <span className="glyphicon glyphicon-minus" /> }
                            Edit Campus
                            </button>
                            { this.state.open ? <EditCampus campus={campus} /> : null }
                        </div>
                        <div>
                            <h1>
                                {campus.name}
                                <button
                                className="btn btn-default btn-xs"
                                onClick={() => removeCampus(campus.id)}>
                                <span className="glyphicon glyphicon-remove" />
                                </button>
                            </h1>
                            <ol>
                                {students.map(student => {
                                return (
                                    <li key={student.id}>
                                        <StudentItem student={student} />
                                    </li>
                                )
                                })}
                            </ol>
                        </div>
                    </div>
                :
                null
                }
            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
    let campus;
    if (state.campus.list) {
        campus = state.campus.list.find((element) => {
            return +element.id === +ownProps.params.id;
        });
    }

    let students;
    if (state.users) {
        students = state.users.filter((element) => {
            return +element.campusId === +ownProps.params.id;
        })
    }

    return ({
        campus,
        students
    })
}

const mapDispatch = {removeCampus}


export default connect(mapState, mapDispatch)(CampusDetail);