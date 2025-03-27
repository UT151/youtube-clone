import React from 'react'
import "./VideoColumn.css"

function VideoColumn({ image, title, views, time, channel }) {
    return (
        <div className='video_column'>
            <img src={image} alt={channel} />
            <p>
                {title}
                <br />
                {channel} • {views} • {time}
            </p>
        </div>
    )
}

export default VideoColumn
