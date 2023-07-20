import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => {
  return(
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='wrapper__app_info'>
        <SubHeading title="Contact"/>
        <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hour's</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
        

      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt="Find us"/>

      </div>
    </div>
  );
}

export default FindUs;
