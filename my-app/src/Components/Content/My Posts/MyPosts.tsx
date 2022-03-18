import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {setDecreaseLike} from "../../Redax/post_reducer";

export function MyPosts(props: PostsPropsType) {
    const posts = props.messages.map((i) => <Post key={i.id} message={i.message} likesCount={i.likesCount} id={i.id}
                                                  dispatchType={props.removePost} setAddLike={props.setAddLike} setDecreaseLike = {props.setDecreaseLike}/>)

    function addPosts() {
        props.addPosts()
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function newText() {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.newText(text)
        }
    }

    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea ref={newPostElement} value={props.newMessages}
                              onChange={newText}/>
                    <button onClick={addPosts}>Add post</button>
                    {posts}
                </div>
            </div>

        </div>
    )
}