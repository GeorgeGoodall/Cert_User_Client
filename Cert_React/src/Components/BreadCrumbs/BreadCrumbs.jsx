import React from 'react';

import classes from "../Sidebar/Sidebar.css";

import {Link} from 'react-router-dom'
import {language} from "../../config/tasks";

const BreadCrumbs = (props) => {

    const {session, task} = props;

    return (
        <React.Fragment>
            <div className={classes.pathLink}>
                &emsp;<Link to="/home">{language.home}</Link>
            </div>
            <div className={classes.pathLink} style={{display: typeof session != "undefined" ? "block" : "none"}}>
                &emsp;&ensp;<Link to="/session">{language.getSessionId(session)}</Link>
            </div>
            <div className={classes.pathLink} style={{display: typeof task != "undefined" ? "block" : "none"}}>
                &emsp;&emsp;<Link to="/task">{task}</Link>
            </div>
        </React.Fragment>
    );
}

export default BreadCrumbs;
