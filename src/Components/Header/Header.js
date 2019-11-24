import React, { Component } from 'react';
import './headerStyle.scss'
import AppleLogo from './AppleLogo.png';

class Header extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>                
                <div className='top-page'>
                    <div className='apple-logo'>
                        <img src={require('./AppleLogo.png')} width='17px' alt='Apple' />                        
                    </div>
                    <div className='header-text'>
                        Mac
                    </div>
                    <div className='header-text'>
                        iPad
                    </div>
                    <div className='header-text'>
                        Watch
                    </div>
                    <div className='header-text'>
                        TV
                    </div>
                    <div className='header-text'>
                        Music
                    </div>
                    <div className='header-text'>
                        Support
                    </div>
                </div>
                <div className='sub-header'>
                    Free two-day delivery on in-stock items oredered by 5:00 p.m.*
                </div>
                <div className='giftApple'>
                    <img src={require('./appleGift.png')} width='80px' />
                </div>
            </div>
        )
    }

}


export default Header;