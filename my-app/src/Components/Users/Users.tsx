import React from "react";
import {PostsPropsType} from "./UsersContainer";
import classes from './Users.module.css';

export function Users(props: PostsPropsType) {
    return (
        <div>
            {props.users.map(i => {
                return (
                    <div>
                        <img className={classes.item} src={i.photoUrl}/>
                        <div>
                            {i.isFollow ? <button onClick={() => props.unFollow(i.id)}>Follow</button> :
                                <button onClick={() => props.follow(i.id)}>Unfollow</button>
                            }
                        </div>
                        <div className={classes.information}>
                            <div><span>Name: {i.fullName}</span></div>
                            <div><span>Status: {i.status}</span></div>
                            <div><span>Country: {i.location.countryName}</span></div>
                            <div><span>City: {i.location.city}</span></div>
                        </div>

                    </div>
                )


            })}
        </div>
    )
}