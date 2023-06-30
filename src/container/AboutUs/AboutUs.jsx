import React from 'react';
import images from "../../constants/images";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app_bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>"GERICHT" is a renowned culinary destination, offering exceptional quality and 
          impeccable service. Our talented chefs create innovative dishes with a harmonious blend of flavors, using locally sourced ingredients.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='aboutus-kinfe'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>"GERICHT" has a rich history as a culinary gem. From its humble beginnings, the restaurant has evolved into a celebrated dining establishment, renowned for its exquisite cuisine.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
