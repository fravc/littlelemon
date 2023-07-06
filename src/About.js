import React from 'react';

import ImageMarioAdrian from '../src/assets/images/ImageAbout.png';

function AboutSection (){
    return(
        <div className="AboutContainer">
            <div className="text-column">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  
                    </p>
            </div>
                <img alt="mario and adrian cooking" src={ImageMarioAdrian} className='ImageAbout'/>
        </div>
    )
}

export default AboutSection