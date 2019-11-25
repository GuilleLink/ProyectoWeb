import React, { Component } from 'react';
import './headerStyle.scss'

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            scrolled: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 80
            if (isTop !== true){
                this.setState({ scrolled: false });
            }
            else {
                this.setState({ scrolled: true });
            }
        })
    }

    componentWillMount() {
        window.removeEventListener('scroll', ()=>{});
    }

    render(){
        return(
            <div>                
                <div className={this.state.scrolled ? 'top-page' : 'top-page scrolled'}>
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
                        iPhone
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
                    <div className='fa search-logo'>
                        <img src={require('./search2.png')} width='22px' alt='Search' />
                        
                    </div>
                    <div className='fa-shop'>
                        <img src={require('./fa-shop.png')} width='28px' alt='Shop' />
                        <a href='#' className='fa fa-shop'></a>
                    </div>                    
                </div>
                <div className='sub-header'>
                    Free two-day delivery on in-stock items oredered by 5:00 p.m.*
                </div>
                <div className='giftApple'>
                    <img src={require('./appleGift.png')} width='80px' />
                </div>
                <div className='make-someone'>
                    Make Someone's holiday.
                </div>
                <div className='shop-gifts'>
                    Shop gifts >
                </div>
            </div>
        )
    }

}


export default Header;