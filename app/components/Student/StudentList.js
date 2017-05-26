import React, { Component } from 'react';
import {connect} from 'react-redux';
import StudentItem from '../Student/StudentItem';
import AddStudent from './AddStudent';

class StudentList extends Component {

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
        const {students, campus} = this.props;
        if (!students.length) return <div />;
        return (
            <div className="student-list">
                <button
                    className="btn btn-default"
                    onClick={this.toggleForm}
                >
                    { !this.state.open ? <span className="glyphicon glyphicon-plus" /> : <span className="glyphicon glyphicon-minus" /> }
                    Add Student
                </button>
                { this.state.open ? <AddStudent campuses={campus.list} /> : null}
                <div>
                    {
                        students.map((student) => {
                            return (<StudentItem student={student} key={student.id} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({students, campus}) => {
    return ({
        students,
        campus
    })
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentList);