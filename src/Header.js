import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationslIcon from "@material-ui/icons/Notifications"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link} from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon />
            <img className="header__logo" src="https://www.clipartkey.com/mpngs/m/38-389855_youtube-red-transparent-background-youtube-icon.png" alt=""/>
        </div>
        <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search whatever you want" type ="text"></input>
           <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>
        </div>
        <div className="header__left">
            <VideoCallIcon />
            <AppsIcon />
            <NotificationslIcon />
            <AccountCircleIcon />
        </div>
        </div>
    )
}
export default Header
