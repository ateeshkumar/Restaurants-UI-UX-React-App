import React from 'react';
import images from '../../constants/images';
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>

    <p className='cormorant' style={{color:'white'}}>
      {title}
    </p>
    <img src={images.spoon} alt="Spoon" className='spoon__img'/>
  </div>
);

export default SubHeading;
