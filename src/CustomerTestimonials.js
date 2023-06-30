import React from 'react';
import { useMediaQuery } from 'react-responsive';

import UserLucas from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/assets/images/user_lucas.png';
import UserMaria from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/assets/images/user_maria.jpg';
import UserJane from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/assets/images/user_jane.png';
import UserAndrew from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/assets/images/user_andrew.png';



function TestimonialsSection (){
    const isMobile = useMediaQuery({ maxWidth: 700 });
    return(
        <div className="TestimonialContainer">
            <h2>Testimonials</h2><br/>
            <div className="TestimonialCardsContainer">
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <div className='TestimonialCardInfo'>
                        <img alt="user Lucas" src={UserLucas} />
                        <h4>Lucas</h4>
                    </div>
                    <spam>Delicious food && exceptional service</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <img alt="user Maria" src={UserMaria}/>
                    <h4>Maria</h4>
                    <spam>The best in the neighborhood</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <img alt="user Jane" src={UserJane} />
                    <h4>Jane</h4>
                    <spam>Great place to celebrate Birthdays!</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <img alt="user Andrew" src={UserAndrew} />
                    <h4>Andrew</h4>
                    <spam>Good food and good service!</spam>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection