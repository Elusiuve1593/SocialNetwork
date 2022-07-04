import React from "react";
import classes from './Header.module.css';
// @ts-ignore
import {NavLink} from "react-router-dom";
import {mapDispatchToPropsType, mapStateToPropsType} from "./HeaderContainer";

type logoutType = { logout: () => void }

export function Header(props: mapStateToPropsType & logoutType) {
    return (
        <div className={classes.header}>
            <header>
                <NavLink to={'/content'}>
                    <img
                        src='https://thumbs.dreamstime.com/b/japan-wave-red-sun-logo-japanese-oriental-style-vector-art-illustration-circle-linear-outline-asian-ocean-blue-173623036.jpg'/>
                </NavLink>
                <div className={classes.login}>
                    {props.isAuth
                        ? <div> {props.login}
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </div>
    )
}