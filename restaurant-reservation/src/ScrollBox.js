import React from 'react';
import { Element } from 'react-scroll';

// ScrollBox component- that displays the welcome message and description of the website
function ScrollBox() {
  return (
    <Element className="scroll-box" id="scroll-box">

      <p>
      Welcome to our online restaurant reservation system!
      We have designed this platform with our valued customers in mind, aiming to simplify the process of securing a table at your favorite restaurant.
      With just a few clicks, you can view available times, choose your table, and confirm your reservation all from the comfort of your own home. Forget the hassle of calling during business hours or waiting for a table to become available.
      Our system is available 24/7, providing real-time updates on table availability. Plus, our user-friendly design makes it easy for everyone to navigate. Whether you're planning a romantic dinner, a meet-up with friends, or a large family celebration, we are here to ensure a seamless reservation experience.
      Enjoy your meal!
  

      </p>
    </Element>
  );
}

export default ScrollBox;
