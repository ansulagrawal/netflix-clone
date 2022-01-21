import React, { useEffect, useState } from 'react';
import './Navbar.css';
import NextflixLogo from '../images/netflix.png';

function Navbar() {
   const [show, handleShow] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
            handleShow(true);
         } else handleShow(false);
      });
      return () => {
         window.removeEventListener('scroll');
      };
   }, []);

   return (
      <div className={`nav ${show && 'nav_black'}`}>
         <img className='nav_logo' src={NextflixLogo} alt='Netflix logo' />
         <img
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
         />
      </div>
   );
}

export default Navbar;
