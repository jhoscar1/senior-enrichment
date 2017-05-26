import React from 'react';
import {Link} from 'react-router';


const CampusItem = ({campus}) => {
    return (
        <div className="campus-item">
            <img className="campus-pic" src={campus.image}/>
            <h3>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </h3>
        </div>
    )
}

export default CampusItem;

