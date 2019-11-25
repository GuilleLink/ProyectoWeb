import React, { Component } from 'react';
import './FooterStyle.scss'

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='main-footer'>
                <div className='principal-text'>
                    1. Trade In: Trade-in values vary. iPhone 11 and iPhone 11 Pro
                    promotional pricing is after trade-in of iPhone 8 Plus and iPhone X
                    in good condition. Additional trade-in values require purchase of a new
                    iPhone, subject to availability and limits. Must be at least 18. Apple or its
                    trade-in partners reserve the right to refuse or limit any Trade In transaction
                    for any reason. In-store trade-in requires presentation of a valid, 
                    government-issued photo ID (local law may rquire saving this information). 
                    Sales tax may be assessed on full value of new iPhone. Additional terms from
                    Apple or Apple's trade-in partners may apply. Monthly pricing: Available to 
                    qualified customers and require 0% APR, 24-month installment loan with 
                    Citizens One, and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Full terms apply.
                </div>
                <div className='second-area'>
                    <div className='first-column'>
                        <div className='list-title'>Shop and Learn</div>
                        <div className='list-font'>Mac</div>
                        <div className='list-font'>iPad</div>
                        <div className='list-font'>iPhone</div>
                        <div className='list-font'>Watch</div>
                        <div className='list-font'>TV</div>
                        <div className='list-font'>Music</div>
                        <div className='list-font'>Airpods</div>
                        <div className='list-font'>HomePod</div>
                        <div className='list-font'>iPod Touch</div>
                        <div className='list-font'>Accesories</div>
                        <div className='list-font'>Gift Cards</div>
                    </div>
                    <div className='second-column'>
                        <div className='list-title'>Services</div>
                        <div className='list-font'>Apple Music</div>
                        <div className='list-font'>Apple News+</div>
                        <div className='list-font'>Apple TV+</div>
                        <div className='list-font'>Apple Arcade</div>
                        <div className='list-font'>Apple Card</div>
                        <div className='list-font'>iCloud</div>
                        <div className='list-title'>Account</div>
                        <div className='list-font'>Manage Your Apple ID</div>
                        <div className='list-font'>Apple Store Account</div>
                        <div className='list-font'>iCloud.com</div>
                    </div>
                    <div className='third-column'>
                        <div className='list-title'>Apple Store</div>
                        <div className='list-font'>Find a Store</div>
                        <div className='list-font'>Genius Bar</div>
                        <div className='list-font'>Today at Apple</div>
                        <div className='list-font'>Apple Camp</div>
                        <div className='list-font'>Field Trip</div>
                        <div className='list-font'>Apple Store App</div>
                        <div className='list-font'>Refurbished and Clearance</div>
                        <div className='list-font'>Financing</div>
                        <div className='list-font'>Apple Trade In</div>
                        <div className='list-font'>Order Status</div>
                        <div className='list-font'>Shopping Help</div>
                    </div>
                    <div className='fourth-column'>
                        <div className='list-title'>For Business</div>
                        <div className='list-font'>Apple and Business</div>
                        <div className='list-font'>Shop for Business</div>
                        <div className='list-title'>For Education</div>
                        <div className='list-font'>Apple and Education</div>
                        <div className='list-font'>Shop for College</div>
                        <div className='list-title'>For Healthcare</div>
                        <div className='list-font'>Apple in Healthcare</div>
                        <div className='list-font'>Health on Apple Watch</div>
                        <div className='list-font'>Health Records on iPhone</div>
                        <div className='list-title'>For Government</div>
                        <div className='list-font'>Shop for Government</div>
                        <div className='list-font'>Shop for Veterans and Military</div>
                    </div>
                    <div className='fifth-column'>
                        <div className='list-title'>Apple Values</div>
                        <div className='list-font'>Accesibility</div>
                        <div className='list-font'>Education</div>
                        <div className='list-font'>Environment</div>
                        <div className='list-font'>Inclusion and Diversity</div>
                        <div className='list-font'>Privacy</div>
                        <div className='list-font'>Supplier Responsibility</div>
                        <div className='list-title'>About Apple</div>
                        <div className='list-font'>Newsroom</div>
                        <div className='list-font'>Apple Leadership</div>
                        <div className='list-font'>Job Opportunities</div>
                        <div className='list-font'>Inverstors</div>
                        <div className='list-font'>Events</div>
                        <div className='list-font'>Contact Apple</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;