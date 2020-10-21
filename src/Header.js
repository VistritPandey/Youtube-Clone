import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <img className="header__logo" src="https://www.clipartkey.com/mpngs/m/38-389855_youtube-red-transparent-background-youtube-icon.png" alt=""/>

        </div>
    )
}
export default Header
