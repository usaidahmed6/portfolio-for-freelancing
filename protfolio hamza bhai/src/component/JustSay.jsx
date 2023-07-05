import React from 'react';
import '../style/justSay.css'

const JustSay = () => {
    return (
        <div className='justContainer'>
            <h2 className='have-heading'>
                Have any Project in Mind ?
            </h2>
            <h1 className='JustSay '>
                Just Say Hello !
            </h1>

            <a href="https://www.fiverr.com/ameerhamza2090" target='_blank'>
                <button className='btn btn-danger hvr-bounce-to-right'>
                    Hire me
                </button>
            </a>
        </div>
    )
}

export default JustSay
