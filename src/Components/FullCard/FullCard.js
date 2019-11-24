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
                <div className='font-color-white'>
                    { tittle }
                </div>
                <div className='mid-font-color-white'>
                    { subtittle }
                </div>
                <div className='mid-font-color-gray'>
                    { sub_subtittle }
                </div>
                <h3>
                    { redirectionLink }
                </h3>
            </div>
        )        
    }
}

export default FullCard;