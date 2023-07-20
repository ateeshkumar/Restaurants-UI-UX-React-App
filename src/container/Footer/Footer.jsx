import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';
import images from '../../constants/images';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className='p__opensans'>NH-95, Chandigarh University, Punjab, 232111, INDIA</p>
        <p className='p__opensans'>+91 - 8340345477</p>
        <p className='p__opensans'>+91 - 6493734653</p>
      </div>
      
    <div className="app__footer-links_logo">
          <img src={images.gericht} alt="Logo"/>
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
          <img src={images.spoon} alt="Spoon" style={{marginTop:15}}/>
          <div className="footer__link-icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
    </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>

    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Ateesh. All Rights reserved</p>
    </div>
  </div>

);

export default Footer;
