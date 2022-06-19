import React, {memo} from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {MyPostsForm, MyPostsReduxForm} from "./MyPostsForm";

export const MyPosts = memo((props: PostsPropsType) => {
    const posts = props.messages.map((i) => <Post key={i.id} message={i.message} likesCount={i.likesCount} id={i.id}
                                                  dispatchType={props.removePost} setAddLike={props.setAddLike}
                                                  setDecreaseLike={props.setDecreaseLike}/>)

    function addPosts(values: any) {
        props.addPosts(values.newPostText)
    }

    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <MyPostsReduxForm onSubmit={addPosts}/>
                    {posts}
                </div>
            </div>
        </div>
    )
})