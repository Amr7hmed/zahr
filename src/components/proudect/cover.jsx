import React from 'react'

function Cover(props) {
    const {Image}=props;
  return (
    <div className='img-cover'>
        <img src={Image} alt="Image" />
    </div>
  )
}

export default Cover;