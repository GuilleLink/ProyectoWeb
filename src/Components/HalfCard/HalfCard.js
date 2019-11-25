import React, { Component } from 'react';
import './HalfCard.scss'

class HalfCard extends Component{
    constructor(props){
        super(props);        
    }

    render(){
        const {type, image, tittle, subtitle, redirectionLink} = this.props        

        return(
            <div className={type}>
                <img src={image} />
                <div className='top-font'>
                    { tittle }
                </div>  
                <div className='mid-font'>
                    { subtitle }
                </div>              
                <div className='bottom-font'>
                    { redirectionLink }
                </div>
            </div>
        )     
    }
}

export default HalfCard;