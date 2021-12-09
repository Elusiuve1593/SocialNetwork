import React from "react";
import classes from './Content.module.css';

export function Content(){
    return(
        <div className={classes.content}>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                Ava+Dscr
            </div>
            <div>
                MyPosts
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>

        </div>
    )
}