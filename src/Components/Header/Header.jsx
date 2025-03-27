import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Avatar from '@mui/material/Avatar';
// import { pink, deepPurple } from '@mui/material/colors';
import user from '../../images/user.jpg'

function Header() {
    const [inputSearch, setInputSearch] = useState("")
    // setInputSearch("")
    return (

        <div className='header'>
            {/* Child1 */}
            <div className="header_left">
                <MenuIcon className='iconCursor' />
                <Link to={'/'}>
                    <img
                        className='header_logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
                </Link>
            </div>

            {/* Child2 */}
            <div className="header_centre">
                {/* sets the value of input by using setInputSearch-typing is enebled */}
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search" />
                {/* links the inpput search to the respective Page */}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_search' />
                </Link>
            </div>

            {/* Child3 */}
            <div className="header_right">
                <VideoCallOutlinedIcon className='header_icons' />
                <NotificationsNoneOutlinedIcon className='header_icons' />
                <Avatar
                    className='iconCursor'
                    alt='ABC XYZ'
                    src={user}
                />
                {/* <Avatar
                alt='ABC XYZ'
                src='https://randomuser.me/api/portraits/women/35.jpg'
            /> */}
                {/* <Avatar sx={{ bgcolor: pink[500] }}>UT</Avatar> */}
            </div>

        </div >

    )
}

export default Header
