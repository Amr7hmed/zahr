import React from 'react'

function Card(Props) {
    const {Title,Nameuser,Addres,Phone}=Props;
  return (
    <div className='card__checkout'>
        <span className='title'>{Title}</span>
        <span className='nameuser'>{Nameuser}</span>
        <span className='addres'>{Addres}</span>
        <span className='phone'>{Phone}</span>

        </div>
  )
}

export default Card;