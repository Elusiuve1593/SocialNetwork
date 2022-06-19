import React, {useEffect} from "react";
import classes from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../Redax/redux-store";
import {logout} from "../Redax/auth_reducer";

export function Header(props: mapStateToPropsType) {
    const isAuth = useSelector<AppStateType>(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(logout())
    }
    return (
        <div className={classes.header}>
            <header>
                <NavLink to={'/content'}>
                    <img
                        src='https://thumbs.dreamstime.com/b/japan-wave-red-sun-logo-japanese-oriental-style-vector-art-illustration-circle-linear-outline-asian-ocean-blue-173623036.jpg'/>
                </NavLink>
                <div className={classes.login}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                    <button className={classes.logout} onClick={onClickHandler}>Logout</button>
                </div>
            </header>
        </div>
    )
}