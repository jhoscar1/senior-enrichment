import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCampus} from '../../redux/campus';


class AddCampus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            imageInput: null
        }
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        const campus = {
            name: this.state.nameInput,
            image: this.state.imageInput
        }
        console.log(campus);
        this.props.addCampus(campus);
        this.setState({
            name: '',
            imageInput: null
        });
    }

    render() {
        return (
        <form className="add-campus" onSubmit={this.onSubmit}>
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
                    name="image"
                    type="text"
                    placeholder="Image Link"
                    onChange={(event) => this.setState({imageInput: event.target.value})}
                    value={this.state.imageInput}
                />
            </div>
            <button type="submit "className="btn btn-primary">Submit
            </button>
        </form>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({campus}) => ({campus})
const mapDispatch = {addCampus};

export default connect(mapState, mapDispatch)(AddCampus);

