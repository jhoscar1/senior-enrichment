import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditStudent from './EditStudent';
import {Link} from 'react-router';


class StudentDetail extends Component {

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
        const {student, campus} = this.props;
        if (!student) return <div />;
        return (
            <div className="student-detail">
                <button
                    className="btn btn-default"
                    onClick={this.toggleForm}
                >
                { !this.state.open ? <span className="glyphicon glyphicon-plus" /> : <span className="glyphicon glyphicon-minus" /> }
                Edit Student
                </button>
                { this.state.open ? <EditStudent student={student}campuses={campus.list} /> : null }
                <h1>{student.name}</h1>
                <h3>Email: {student.email}</h3>
                <h3>Campus: <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link></h3>

            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({users, campus}, ownProps) => {
    const student = users.find((user) => (
            +user.id === +ownProps.params.id
        )
    );

    return {
        student,
        campus
    }
}

export default connect(mapState)(StudentDetail);

