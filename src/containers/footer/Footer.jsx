import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer__heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer__btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer__links-section'>
        <div className='gpt3__footer__links-section__logo'>
          <img src={gpt3logo} alt='logo' />
          <p>7, Asajon Way, Eti-Osa 106104, Sangotedo Lagos, Nigeria, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer__links-section__links'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer__links-section__links'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer__links-section__links'>
          <h4>Get in touch</h4>
          <p>7, Asajon Way, Eti-Osa 106104, Sangotedo Lagos, Nigeria</p>
          <p>+2347065963753</p>
          <p>my-portfolio-0zxa.onrender.com</p>
        </div>
      </div>

      <div className='gpt3__footer__copyright'>
        <p>© 2023 Olagunju Isaac Afolabi. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Footer