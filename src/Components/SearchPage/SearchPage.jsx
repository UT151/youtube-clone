import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelColumn from '../ChannelColumn/ChannelColumn'
import VideoRow from '../VideoRow/VideoRow';
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import user4 from "../../images/user4.jpg"

function SearchPage() {
    return (
        <div className='search_content'>
            {/* <h3>I am the page you searched for.</h3> */}
            <div className="search_left">
                <div className="search_filter">
                    <TuneOutlinedIcon className='filter_icon' />
                    <p>Filters</p>
                </div>
                <hr />
                <VideoRow
                    image={user3}
                    title="Video Title!"
                    views='2M views'
                    time='11 months ago'
                    avatar="https://randomuser.me/api/portraits/men/18.jpg"
                    channel='My Channel'
                    verified
                    description="This is the description of the video. 
                    It outlines what the video is about."
                />
                <VideoRow
                    image={user4}
                    title="Video Title!"
                    views='2M views'
                    time='11 months ago'
                    avatar="https://randomuser.me/api/portraits/men/18.jpg"
                    channel='My Channel'
                    verified
                    description="This is the description of the video. 
                    It outlines what the video is about."
                />
                <VideoRow
                    image={user3}
                    title="Video Title!"
                    views='2M views'
                    time='11 months ago'
                    avatar="https://randomuser.me/api/portraits/men/18.jpg"
                    channel='My Channel'
                    verified
                    description="This is the description of the video. 
                    It outlines what the video is about."
                />
                <VideoRow
                    image={user4}
                    title="Video Title!"
                    views='2M views'
                    time='11 months ago'
                    avatar="https://randomuser.me/api/portraits/men/18.jpg"
                    channel='My Channel'
                    verified
                    description="This is the description of the video. 
                    It outlines what the video is about."
                />
                <VideoRow
                    image={user2}
                    title="Video Title!"
                    views='2M views'
                    time='11 months ago'
                    avatar="https://randomuser.me/api/portraits/men/18.jpg"
                    channel='My Channel'
                    verified
                    description="This is the description of the video. 
                    It outlines what the video is about."
                />
            </div>
            <div className="search_right">
                <ChannelColumn
                    image="https://randomuser.me/api/portraits/men/18.jpg"
                    channel="My Channel"
                    verified
                    handle="@my_channel"
                    description="You will find a set of wholesome videos on this channel."
                />
            </div>
        </div>
    )
}

export default SearchPage
