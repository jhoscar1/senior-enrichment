import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addStudent} from '../../redux/student';


class AddStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            emailInput: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        const student = {
            name: this.state.nameInput,
            email: this.state.emailInput,
            campusId: event.target.campus.value
        }
        this.props.addStudent(student);
        this.setState({
            name: '',
            email: ''
        });
    }

    render() {
        const {campuses} = this.props;
        return (
        <form className="add-student" onSubmit={this.onSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={(event) => this.setState({nameInput: event.target.value})}
                    value={this.state.nameInput}
                />
                <input
                    className="form-control"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={(event) => this.setState({emailInput: event.target.value})}
                    value={this.state.emailInput}
                />
                <select
                    className="form-control"
                    name="campus"
                >
                    {campuses.map(campus =>
                        (<option value={campus.id} key={campus.id}>{campus.name}</option>)
                    )}
                </select>
            </div>
            <button type="submit "className="btn btn-primary">Submit
            </button>
        </form>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({campus}) => ({campus})
const mapDispatch = {addStudent};

export default connect(mapState, mapDispatch)(AddStudent);

