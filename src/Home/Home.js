import React, { Component } from 'react';
import Banner from './Banner';
import Header from './Header';
import Recommend from './Recommend';
import '../Css/Home.css';

class Home extends Component {

    render() {
        return (
            <div className='home'>
                <Header/>
                <Banner/>
                <Recommend/>
                
            </div>
        );
    }
}

export default Home;