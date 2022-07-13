import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../Css/Comments.css'
function Comments() {
    return (
        <div className='comments'>
            <div className='comments_title'>Home </div>
            <div className='comments_profile'> 
                <div className='comments_profileimg'>            
                    <img className='comments_img' src='https://upload.wikimedia.org/wikipedia/commons/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png'
                    alt=''
                    />            
                </div>
                <div className='comments_options'>
                    <div className='comments_input'>
                        <input type='text' placeholder="What's happening?"></input>
                    </div>
                    <div className='comments_icons'>
                        <div className='comments_icon'>
                            <ImageIcon className='icon'/>
                            <GifBoxIcon className='icon'/>
                            <EmojiEmotionsIcon className='icon'/>
                            <LocationOnIcon className='icon'/>
                        </div>
                        <div className='comments_button'>
                            <button className='comments_btn' type='submit'>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;