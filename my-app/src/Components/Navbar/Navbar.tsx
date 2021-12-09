import React from "react";
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={classes.navbar}>
            <nav>
                <div className={classes.item}><a>Profile</a></div>
                <div className={classes.item}><a>Messages</a></div>
                <div className={classes.item}><a>News</a></div>
                <div className={classes.item}><a>Music</a></div>
                <div className={classes.item}><a>Settings</a></div>
            </nav>
        </div>
    )
}
