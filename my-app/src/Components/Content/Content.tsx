import React from "react";
import classes from './Content.module.css';
import {MyPosts} from "./My Posts/MyPosts";


export function Content() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                Ava+Dscr
            </div>
            <MyPosts/>
        </div>
    )
}