import { Avatar } from '@mui/material'
import React from 'react'
import './Videocard.css'

function Videocard({ image, title, channel, avatar, views, time }) {
    return (
        <div className='videocard'>
            {/* <h4>Video</h4> */}
            <img className='video_thumbnail' src={image} alt="" srcSet="" />

            <div className="video_info">
                <Avatar
                    className='video_avatar'
                    src={avatar}
                    alt='Channel Avatar'
                />
                <div className="video_text">
                    <h3>{title}</h3>
                    <p>{channel}</p>
                    <p>
                        {views} • {time}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
