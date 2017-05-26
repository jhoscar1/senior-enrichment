import React, { Component } from 'react';
import {connect} from 'react-redux';
import CampusItem from './CampusItem';

class CampusList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campusName: ''
        }
    }

    render() {

        const filteredCampuses = this.props.campuses
            .filter(campus => {
                return campus.name.toLowerCase().indexOf(this.state.campusName.toLowerCase()) > -1;
            });

        return (
            <div className="campus-list row">
                {this.renderCampusSearch()}
                <div className="col-md-4">
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

