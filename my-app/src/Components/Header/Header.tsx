import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";

export function Header(props: mapStateToPropsType) {
    return (
        <div className={classes.header}>
            <header>
                <NavLink to={'/content'}>
                    <img
                        src='https://thumbs.dreamstime.com/b/japan-wave-red-sun-logo-japanese-oriental-style-vector-art-illustration-circle-linear-outline-asian-ocean-blue-173623036.jpg'/>
                </NavLink>
                <div className={classes.login}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </div>
    )
}