/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import  Locationicon  from '../../images/icon/location-icon.svg';
import  Phoneicon  from '../../images/icon/phone-solid.svg';
import  Envelopeicon  from '../../images/icon/envelope-solid.svg';

function FooterContact() {
  return (
  <div className='footerlist'>
        <h5>تواصل معنا</h5>
        <ul className='footercontact'>

        <li>
            <span className='img'>
              <img src={Phoneicon} alt="" />
            </span>
            <span className='text'>
            0584932999
            </span>
          </li>

          
          <li>
            <span className='img'>
              <img src={Envelopeicon} alt="" />
            </span>
            <span className='text'>
            zahr.zahr@gmail.com
            </span>
          </li>


          <li>
            <span className='img'>
              <img src={Locationicon} alt="" />
            </span>
            <span className='text'>
            هنا يوضع عنوان هنا عنوان 
هنا عنوان عنوان
            </span>
          </li>
        </ul>
    </div>
  )
}

export default FooterContact;