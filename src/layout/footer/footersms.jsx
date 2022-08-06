import React from 'react'

function FooterSms() {
  return (
    <div className='footersms'>
        <h4>
  اشترك في نشرتنا الإخبارية
        </h4>

<div className="input">
    <input type="email" placeholder='بريدك الالكتروني' />
</div>
<button type="button" className='btn btn-send'>
الإشتراك
</button>
    </div>
  )
}

export default FooterSms;