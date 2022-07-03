import React from 'react';
import { images } from './Constant';
import ReactWhatsapp from 'react-whatsapp';

const Header = () => {
  return (
    <header>
         <div className='nav-brand'>
           <p>Swift Media</p>
         </div>
         <a > 
          
           </a>
            <ReactWhatsapp number="2347026779219" message="Hello World">
            <img src={images.whatsapp} /> 
              </ReactWhatsapp>
    </header>
   
  )
}

export default Header