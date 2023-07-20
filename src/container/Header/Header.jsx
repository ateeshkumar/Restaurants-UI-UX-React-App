import React from 'react';

import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';
const Header = () =>{
  return(
    <div className='app__header app__wrapper section__padding' id='home'>

      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Find Dining</h1>
        <p className="p__opensans" style={{margin:'2rem 0'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis illum itaque sed, a repellat accusantium officia. Nihil illo doloribus, sunt ad et voluptatem tempora autem quasi iste eveniet numquam?
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">

          <img src={images.welcome} alt="Welcom" />
      </div>
    </div>
  );
}

export default Header;
