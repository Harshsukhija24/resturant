import React from 'react';
//import {SubHeading} from "../../components/SubHeading";
import  SubHeading  from '../../components/SubHeading/SubHeading'

import  images  from "../../constants/images"
import './Chef.css';

const Chef = () => (
  <div className='head'>
  <div className=' app__wrapper section__padding '>
<div className='app__wrapper_img app__wrapper_img-reverse'>

<img src={images.chef} alt='chef_img'/>
</div>    
<div className='app__wrapper_info'>
<SubHeading title="chef`s word "/>
<h1 className='headtext__cormorant'>What We Belive In
</h1>
<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img src={images.quote} alt='quote '/>
<p className='p__opensans'> our team of skilled chefs is the heart and soul of our culinary excellence. With a passion for innovation and a mastery of flavors, our chefs create extraordinary gastronomic experiences. From expertly crafted dishes to artistic presentations, their culinary expertise will leave you in awe.</p>

</div>
<div className='app__chef-sign ' >
<p>Harsh sukhija</p>
<p>Chef & Founder</p>

</div>
</div>
  </div>
  </div>
  </div>
);

export default Chef;
