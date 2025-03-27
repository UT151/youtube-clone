import React from 'react'
import './SidebarRow.css';

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebar_row ${selected && 'selected'}`} >
            {/* to get the home row selected always */}
            <Icon className='sidebarRow_icon' />
            <h2 className='sidebarRow_title'>{title}</h2>
        </div >
    )
}

export default SidebarRow

