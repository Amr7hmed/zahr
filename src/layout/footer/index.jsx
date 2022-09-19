/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import FooterCategories from './footercategories.jsx';
import FooterEnd from './footerend.jsx';
import FooterList from './footerlist.jsx';
import FooterContact from './footercontact.jsx';
import FooterSms from './footersms.jsx';
import FooterLogo from './footerlogo.jsx';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <FooterLogo />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <FooterCategories />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <FooterList />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <FooterSms />

          </div>
        </div>

<FooterEnd/>
      </div>
    </footer>
  )
}

export default Footer;