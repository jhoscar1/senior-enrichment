import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editCampus} from '../../redux/campus';

class EditCampus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: `${props.campus.name}`
        }
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        const campus = {
            name: this.state.nameInput,
        }

        this.props.editCampus(this.props.campus.id, campus);
        this.setState({
            nameInput: ''
        });
    }

    render() {
        return (
        <form className="edit-campus" onSubmit={this.onSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={(event) => this.setState({nameInput: event.target.value})}
                    value={this.state.nameInput}
                />
            </div>
            <button type="submit "className="btn btn-primary">Submit
            </button>
        </form>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = {editCampus};

export default connect(mapState, mapDispatch)(EditCampus);