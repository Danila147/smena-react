import React from 'react';
import logo from '../img/header-logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo' className='logo' />
      <nav>
        <ul className='footer__links'>
          <li className='footer__link'>о нас</li>
          <li className='footer__link'>местоположение</li>
          <li className='footer__link'>меню</li>
          <li className='footer__link'>вакансии</li>
          <li className='footer__link'>контакты</li>
        </ul>
      </nav>
      <div className='footer__contacts'>
        <div>
          <p className='footer__text-info footer__text-info_large'>ТЕЛЕФОН:</p>
          <p className='footer__text-info'>8(911)813-15-50</p>
        </div>
        <div>
          <p className='footer__text-info footer__text-info_large'>ПОЧТА:</p>
          <p className='footer__text-info'>smenacafe@gmail.com</p>
        </div>
        <div>
          <p className='footer__text-info footer__text-info_large'>
            ZAPRESHENKA:
          </p>
          <p className='footer__text-info'>@smenacafe</p>
        </div>
        <div>
          <p className='footer__text-info footer__text-info_large'>TELEGRAM:</p>
          <p className='footer__text-info'>@smenaspb</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
