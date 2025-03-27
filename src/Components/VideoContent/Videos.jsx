import React from 'react'
import './Videos.css'
import Videocard from './Videocard'
import user2 from '../../images/user2.jpg'
import user3 from '../../images/user3.jpg'
import user4 from '../../images/user4.jpg'
import user5 from '../../images/user5.jpg'
import user6 from '../../images/user6.jpg'
import user7 from '../../images/user7.jpg'
// import Bar from '../CategoriesBar/Bar'

function Videos() {
    return (
        <div className='video_content'>
            {/* <Bar /> */}
            {/* <h3>I contain the recommended videos.</h3> */}
            <h2>Recommended</h2>
            <div className="content">
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    channel='Only Videos'
                    image={user6}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/5.jpg"
                    channel='Only Videos'
                    image={user3}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/55.jpg"
                    channel='Only Videos'
                    image={user4}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/men/32.jpg"
                    channel='Only Videos'
                    image={user2}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/27.jpg"
                    channel='Only Videos'
                    image={user3}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/men/35.jpg"
                    channel='Only Videos'
                    image={user2}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/49.jpg"
                    channel='Only Videos'
                    image={user5}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/men/12.jpg"
                    channel='Only Videos'
                    image={user2}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/men/76.jpg"
                    channel='Only Videos'
                    image={user3}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/82.jpg"
                    channel='Only Videos'
                    image={user4}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/35.jpg"
                    channel='Only Videos'
                    image={user2}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/95.jpg"
                    channel='Only Videos'
                    image={user6}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/35.jpg"
                    channel='Only Videos'
                    image={user4}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/10.jpg"
                    channel='Only Videos'
                    image={user3}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/28.jpg"
                    channel='Only Videos'
                    image={user5}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/35.jpg"
                    channel='Only Videos'
                    image={user6}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/13.jpg"
                    channel='Only Videos'
                    image={user7}
                />
                <Videocard
                    title="Video Title!"
                    views='2M views'
                    time='2 days ago'
                    avatar="https://randomuser.me/api/portraits/women/3.jpg"
                    channel='Only Videos'
                    image={user5}
                />

            </div>
        </div>
    )
}

export default Videos

