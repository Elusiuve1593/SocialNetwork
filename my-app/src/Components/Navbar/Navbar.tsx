import React from "react";
import '../App.css'

export function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <div className='item'><a>Profile</a></div>
                <div className='item'><a>Messages</a></div>
                <div className='item'><a>News</a></div>
                <div className='item'><a>Music</a></div>
                <div className='item'><a>Settings</a></div>
            </nav>
        </div>
    )
}