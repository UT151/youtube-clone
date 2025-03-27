import React from 'react'
import "./VideoRow.css"
import { Avatar } from '@mui/material'
// import user from "../../images/user.jpg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function VideoRow({ image, avatar, channel, verified, title, views, time, description }) {
    return (
        <div className='video_search'>
            <img src={image} alt="Video Thumbnail" />
            <div className="search_text">
                <p className='search_p1'>
                    <h4>{title}</h4>
                    <span className="search_p2">
                        {views} • {time}
                    </span>
                </p>
                <p>
                    <div className="search_channel">
                        <Avatar
                            className='search_avatar'
                            src={avatar}
                            alt={channel}
                        />
                        <h5> <span className="search_channelName">{channel}</span>
                            {verified && <CheckCircleIcon className='verified_icon' />}
                        </h5>
                    </div>
                    <div className="search_description">
                        {description}
                    </div>
                </p>
            </div>
        </div>
    )
}
