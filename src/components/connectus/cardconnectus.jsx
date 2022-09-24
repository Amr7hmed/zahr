import React from 'react'

function CardConnectUs(props) {
  const {Title,Image,Detiles}=props;
  return (
    <div className='cardconnectus'>
      <div className="top">
        <span className="image">
          <img src={Image} alt="Image" />
        </span>
        <span className="text">
          {Title}
        </span>
      </div>
      <div className="bottom">
        {Detiles}
      </div>
    </div>
  )
}

export default CardConnectUs;