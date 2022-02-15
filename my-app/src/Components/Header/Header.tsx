import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <div className={classes.header}>
            <header>
                <NavLink to={'/content'}>
                    <img src='https://toppng.com/uploads/preview/design-for-logo-11549988276bxsuzsd1y1.png'/>
                </NavLink>

            </header>
        </div>
    )
}