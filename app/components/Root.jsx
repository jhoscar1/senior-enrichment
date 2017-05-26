import React, { Component } from 'react';
import Navbar from './Navbar';

const Root = ({children}) => {
    //console.log(children);
    return (
    <div id="main">
        <Navbar />
        { children }
    </div>
)}

export default Root;