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
        const {users, campus} = this.props;
        if (!users.length) return <div />;
        return (
            <div className="student-list">
                <button
                    className="btn btn-default"
                    onClick={this.toggleForm}
                >
                    { !this.state.open ? <span className="glyphicon glyphicon-plus" /> : <span className="glyphicon glyphicon-minus" /> }
                    Add Student
                </button>
                <div>
                    { this.state.open ? <AddStudent campuses={campus.list} /> : null}
                </div>
                <div>
                    {
                        users.map((user) => {
                            return (<StudentItem student={user} key={user.id} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({users, campus}) => {
    return ({
        users,
        campus
    })
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentList);