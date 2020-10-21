import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <img className="header__logo" src="https://www.clipartkey.com/mpngs/m/38-389855_youtube-red-transparent-background-youtube-icon.png" alt=""/>
            <input type ="text"></input>
            <SearchIcon />
            <VideoCallIcon />
        </div>
    )
}
export default Header
