import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationslIcon from "@material-ui/icons/Notifications"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon />
            <img className="header__logo" src="https://www.clipartkey.com/mpngs/m/38-389855_youtube-red-transparent-background-youtube-icon.png" alt=""/>
        </div>
        <div className="header__left">
            <input type ="text"></input>
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationslIcon />
            <AccountCircleIcon />
        </div>
        </div>
    )
}
export default Header
