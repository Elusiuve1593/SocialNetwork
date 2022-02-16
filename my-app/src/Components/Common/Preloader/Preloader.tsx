import React from "react";
import classes from "../Preloader/Preloader.module.css"
import PreloaderGif from "../Preloader/H5EW7.gif"
export function Preloader(){
    return(
        <div>
            <img className={classes.item} src={PreloaderGif}/>
        </div>
    )
}