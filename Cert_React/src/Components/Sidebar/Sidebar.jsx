import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
import classNames from "classnames";
import UniLogo from '../uniLogo.jsx';
import {Link} from 'react-router-dom'
import {language} from "../../config/tasks";

import classes from "./Sidebar.css";
import Backdrop from '../Backdrop/Backdrop';
import Settings from "../../Pages/SettingsPage/Settings"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

const Sidebar = forwardRef((props,ref) => {

    let [sideBarOpen, setSidebarOpen] = useState(false);
    const backdropRef = useRef();

    const {session, task} = props;

    useImperativeHandle(ref, ()=>({
		setSideBar: (open) => {
            backdropRef.current.setBackdrop(open);
			setSidebarOpen(open);
		},
    }));
  

    return (
        <div>
            <div className={classNames({[classes.sideBar]:true, [classes.open]:sideBarOpen})}>
                <div className={classes.headerContainer}>
                    <UniLogo className={classes.logo}/>
                    <h1 className={classes.header}>Emotion <br/> Recognition <br/> Training</h1>
                </div>
                <div className={classes.box}>
                    <h1>Navigation:</h1>
                    <BreadCrumbs session={props.session} task={props.task}/>
                </div>
                <div className={classes.box}>
                    <h1>Settings:</h1>
                    <Settings getTasks={props.getTasks}/>
                </div>
            </div>
            <Backdrop ref={backdropRef} closeCallback={() => setSidebarOpen(false)}/>
        </div>
    );
})

export default Sidebar;
