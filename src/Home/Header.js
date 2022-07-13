import React from 'react';
import '../Css/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Menu() {
    return (
        <div className='header'>
            <div className='header_1'>
                <div className='header_menu'>
                    <div className='header_menu_top'>

                        <TwitterIcon fontSize='large'/>
                    </div>
                    <div className='header_menu_middle'>
                        <div className='middle_items'>
                            <HomeIcon fontSize='large'/>
                            <span> Home </span>
                        </div>
                        <div className='middle_items'>
                        <SearchIcon fontSize='large'/>
                            <span> Search </span>
                        </div>
                        <div className='middle_items'>
                        <MailIcon fontSize='large'/>
                            <span> Messages </span>
                        </div>
                        <div className='middle_items'>
                        <PersonIcon fontSize='large'/>
                            <span> Profile </span>
                        </div>
                        <div className='middle_items'>
                        <NotificationsIcon fontSize='large'/>
                            <span> Notifications </span>
                        </div>
                        <div className='middle_items'>
                        <BookmarkIcon fontSize='large'/>
                            <span> Bookmarks </span>
                        </div>

                    </div>
                    <div className='header_menu_button'>
                        <button className='menu_btn'>Tweet!</button>

                    </div>

                </div>
                <div className='header_information'>
                    <div className='header_infoProfile'>
                            <img className='header_infoImg'
                            src='https://upload.wikimedia.org/wikipedia/commons/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png'
                            alt=''>
                            </img>
                    </div>
                    <div className='header_infoText'>
                        <div className='header_infoName'>

                           <span>김희준</span> 
                        </div>
                        <div className='header_infoId'>
                            <span>@kim14759</span>

                        </div>
                    </div>
                    <div className='header_infoButton'>
                        <button className='info_btn'><MoreHorizIcon/></button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;