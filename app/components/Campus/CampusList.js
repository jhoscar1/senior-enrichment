import React, { Component } from 'react';
import {connect} from 'react-redux';
import CampusItem from './CampusItem';
import AddCampus from './AddCampus';

class CampusList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campusName: '',
            open: false
        }
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const filteredCampuses = this.props.campuses
            .filter(campus => {
                return campus.name.toLowerCase().indexOf(this.state.campusName.toLowerCase()) > -1;
            });

        return (
            <div className="container">
                <div style={{float: 'left'}}>
                    {this.renderCampusSearch()}
                    <button
                        className="btn btn-default adding-campus"
                        onClick={this.toggleForm}
                    >
                        { !this.state.open ? <span className="glyphicon glyphicon-plus" /> : <span className="glyphicon glyphicon-minus" /> }
                        Add Campus
                    </button>
                    { this.state.open ? <AddCampus /> : null }
                </div>
                <div className="campus-list row col-md-4">
                    {
                        filteredCampuses.map(filteredCampus => (
                            <CampusItem campus={filteredCampus} key={filteredCampus.id} />
                        ))
                    }
                </div>
            </div>
        )
    }

    renderCampusSearch() {
        return (
            <div className="container">
                <input
                value={this.state.campus} 
                placeholder="Search for Campus"
                onChange={(event) => this.setState({campusName: event.target.value})}
                type="text"
                />
            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({campus}) => (
    {campuses: campus.list}
)
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

