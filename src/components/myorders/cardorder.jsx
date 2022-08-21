import React from 'react'

function CardOrder(props) {
    const {Image,Title , Color ,Weight ,Price}=props;
  return (
    <div className='cardorder'>
        <div className="contect">

        <div className="image">
            <img src={Image} alt="Image" />
        </div>

        <div className="text">
            <span className='title'>{Title}</span>

            <div className="colors">
                <span>الالوان</span>{" "}
                <span>{Color}</span>
            </div>

            
            <div className="weight">
                <span>الوزن</span>{" "}
                <span>{Weight}kg</span>
            </div>
        </div>
        </div>
        <div className="price">{Price}</div>
    </div>
  )
}

export default CardOrder;