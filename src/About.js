import React from 'react';

import ImageMarioAdrian from '../src/assets/images/ImageAbout.png';

function AboutSection (){
    return(
        <div className="AboutContainer">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <spam>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  
                </p>
                <img alt="mario and adrian cooking" src={ImageMarioAdrian} className='ImageAbout'/>
            </spam>
            

        </div>
    )
}

export default AboutSection