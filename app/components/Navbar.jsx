import React, { Component } from 'react';
import {Link} from 'react-router';

export default (props) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header navbar-left">
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to="/">Space Skool</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><Link activeClassName="active" to='/campuses'>Campus</Link></li>
                <li><Link activeClassName="active" to='/students'>Students</Link></li>
            </ul>
        </div>
    </nav>
)