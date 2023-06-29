import React from 'react';

function TestimonialsSection (){
    return(
        <div className="TestimonialWrapper">
            <div className="Testimonial1">
                <h3>Rating</h3>
                <img alt="user Lucas" src="./assets/images/user_lucas.png" />
                <h4>Lucas</h4>
                <spam>Delicious food and exceptional service</spam>
            </div>
            <div className="Testimonial2">
                <h3>Rating</h3>
                <img alt="user Maria" src="./assets/images/user_maria.jpg" />
                <h4>Maria</h4>
                <spam>The best in the neighborhood</spam>
            </div>
            <div className="Testimonial3">
                <h3>Rating</h3>
                <img alt="user Jane" src="./assets/images/user_jane.jpg" />
                <h4>Jane</h4>
                <spam>Great place to celebrate Birthdays!</spam>
            </div>
            <div className="Testimonial4">
                <h3>Rating</h3>
                <img alt="user Andrew" src="./assets/images/user_andrew.jpg" />
                <h4>Andrew</h4>
                <spam>Good food and good service!</spam>
            </div>
        </div>
    );
}

export default TestimonialsSection