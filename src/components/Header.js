import React from "react"
import memeicon from './../images/troll-face.png'
export default function Header(){
    return (
        <header className = "header">
            <img src = {memeicon} 
            className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Projects 3</h4>
        </header>
    )
}