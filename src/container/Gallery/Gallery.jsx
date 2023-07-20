import React, { useRef } from 'react';

import './Gallery.css';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const image = [images.gallery01, images.gallery02, images.gallery03,images.gallery04]


const Gallery = () =>{


  const scrollRef = useRef(null);
  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction==='left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;

    }

  }
  return(
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:'#AAA',marginTop:'2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit perspiciatis neque quae expedita delectus.
        </p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
      <div className="app__gallery-image">
        <div className="app__gallery-image_container" ref={scrollRef}>
            {image.map((image,index)=>
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="Gallery Image"/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
            
            )}
        </div>
        <div className="app__gallery-image_arrows">
          <BsArrowLeftShort className='gallery_arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery_arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    
    </div>
  );
}

export default Gallery;
