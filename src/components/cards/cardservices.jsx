/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function CardServices(props) {
  const { Image, Title } = props;
  return (
    <div className='cardservices'>
      <div className="img">
        <img src={Image} alt="Image" />
      </div>
      <div className="content">
        <p>{Title}</p>
      </div>

    </div>
  )
}

export default CardServices;