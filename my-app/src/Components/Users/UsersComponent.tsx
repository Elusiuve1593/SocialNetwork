import React from "react";
import classes from "./Users.module.css";
import {onClickHandlerType, PostsPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {deleteUsers, postUsers} from "../Axios/axios";

export function UsersComponent(props: PostsPropsType & onClickHandlerType) {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(i => {
                return <span onClick={() => props.onClickHandler(i)}
                             className={props.currentPage === i ? classes.selectedPage : ''}>{i} </span>
            })}
            {props.users.map(i => {
                return (
                    <div>
                        <NavLink to={'/content/' + i.id}>
                            <img className={classes.item}
                                 src={i.photos.small !== null ? i.photos.small : 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'}/>
                        </NavLink>
                        <div>
                            {i.followed ? <button onClick={() => {
                                    deleteUsers(i.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(i.id)
                                            }
                                        })
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    postUsers(i.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(i.id)
                                            }
                                        })
                                }}>Follow</button>
                            }
                        </div>
                        <div className={classes.information}>
                            <div><span>Name: {i.name}</span></div>
                            <div><span>Status: {i.status ? true : 'In progress'}</span></div>
                            {/*<div><span>Country: {'i.location.countryName'}</span></div>*/}
                            {/*<div><span>City: {'i.location.city'}</span></div>*/}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}