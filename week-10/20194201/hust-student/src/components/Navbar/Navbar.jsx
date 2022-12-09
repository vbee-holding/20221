import React from "react";
import {Link} from 'react-router-dom';      
let NavBar = () => {
    return(
        <React.Fragment>
            <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/Students/list'} className ="navbar-brand">
                    <b> Hust Students</b></Link>
                    <Link to={'/Students/add'} className ="btn btn-primary" ><i class="fa fa-plus-circle"></i> Add Student</Link>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default NavBar;
