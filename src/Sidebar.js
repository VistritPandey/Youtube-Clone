import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>I am the sidebar</h1>
            <SidebarRow title="Home"/>
            <SidebarRow title="Trending"/>
            <SidebarRow title="Subscriptions"/>
        </div>
    )
}

export default Sidebar
