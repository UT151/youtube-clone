import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* <h2>I am a Side Bar.</h2> */}
            <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
            <SidebarRow Icon={WhatshotOutlinedIcon} title="Shorts" />
            <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
            <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
            <SidebarRow Icon={SlideshowOutlinedIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar
