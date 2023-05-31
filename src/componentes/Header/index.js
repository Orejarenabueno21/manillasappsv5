import React from 'react'
import pul from '../../set-pulseras-unisex.png';

export const Header = () => {
  return (
       <header>

            <a href='#'>
               <div className='logo'>
               <img src={pul} alt='imagen' width='150px'/>
               </div>
            </a>
            <ul>
               <li>
                    <a href='#'>INICIO</a>
               </li>
               <li>
                    <a href='#'>PRODUCTOS</a>
               </li>
            </ul>
            <div className='cart'>
            <box-icon name='cart'></box-icon>
            <span className='item__total'>0</span>

            </div>
       </header>
  
  )
}

export default Header