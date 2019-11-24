import React, { Component } from 'react';
import './FullCard.scss'

class FullCard extends Component{
    constructor(props){
        super(props);        
    }

    render(){
        const {type, tittle, subtittle, sub_subtittle, redirectionLink} = this.props        

        return(
            <div className={type}>
                <div className='top-font'>
                    { tittle }
                </div>
                <div className='mid-font'>
                    { subtittle }
                </div>
                <div className='lower-mid-font'>
                    { sub_subtittle }
                </div>
                <div className='bottom-font'>
                    { redirectionLink }
                </div>
            </div>
        )     
    }
}

export default FullCard;