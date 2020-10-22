import './Recommended.css'
import React from 'react'
import Video from './Video'

function Recommended() {
    return (
        <div className="recommended">
            <h2>Recommended</h2>
            <div className="recommeded__videos" >
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    )
}

export default Recommended
