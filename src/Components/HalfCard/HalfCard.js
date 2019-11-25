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
                <div className='top-half-font'>
                    { tittle }
                </div>  
                <div className='mid-half-font'>
                    { subtitle }
                </div>              
                <div className='bottom-half-font'>
                    { redirectionLink }
                </div>
            </div>
        )     
    }
}

export default HalfCard;