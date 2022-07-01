import React from "react";
// @ts-ignore
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={classes.navbar}>
            <nav className={classes.item}>
                <div className={classes.item}><NavLink to='/content'>Profile</NavLink></div>
                <div className={classes.item}><NavLink to='/dialogs'>Messages</NavLink></div>
                <div className={classes.item}><NavLink to='/users'>Users</NavLink></div>
                {/*<div className={classes.item}><NavLink to='/news'>News</NavLink></div>*/}
                {/*<div className={classes.item}><NavLink to='/music'>Music</NavLink></div>*/}
                {/*<div className={classes.item}><NavLink to='/settings'>Settings</NavLink></div>*/}
            </nav>
        </div>
    )
}
