import React from 'react'
import "./ChannelColumn.css"
import { Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideoColumn from '../VideoColumn/VideoColumn';
import user7 from "../../images/user7.jpg"


function ChannelColumn({ image, channel, verified, handle, description }) {
    return (
        <div>
            <div className='channel_column'>
                <Avatar className='column_icon' alt={channel} src={image} />

                <div className="column_text">
                    <h4>
                        {channel} {verified && <CheckCircleIcon className='verified_icon' />}
                    </h4>
                    <p>
                        {handle} • {description}
                    </p>
                </div>
            </div>
            <VideoColumn
                image={user7}
                title="The latest video from the channel."
                views='200K views'
                time='1 day ago'
                // avatar="https://randomuser.me/api/portraits/men/18.jpg"
                channel='My Channel'
            // verified
            // description="This is the description of the video. 
            //     It outlines what the video is about."
            />
        </div>
    )
}

export default ChannelColumn
