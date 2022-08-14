import React, { useState } from 'react';
import Top from "../../images/icon/chevron-up-solid.svg";
import Down from "../../images/icon/chevron-down-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProudectEnd() {
    const [number, setNumber] = useState(1);

    const Plusaction = (e) => {
        e.preventDefault();
        setNumber(number + 1)
    }

    const Downaction = (e) => {
        e.preventDefault();
        if (number <= 1) {
            setNumber(1)
        } else {
            setNumber(number - 1)
        }
    }


    const AddCart = (e) => {
        e.preventDefault();
        alert("This Item Is Add To Cart !")
    }

    const AddFavort = (e) => {
        e.preventDefault();
        alert("This Item Is Add To Favort !")
    }
    return (
        <div className="proudect__end">
            <div className="conter">
                <span className='number'>
                    {number}
                </span>
                <span className='plus'>
                    <button className='btn-plus' type='button'>
                        <img src={Top} alt="Top" onClick={Plusaction} />
                    </button>
                    <button className={number === 1 ? 'button-disabled btn-plus' : 'btn-plus'} type='button'>
                        <img src={Down} alt="Down" onClick={Downaction} />
                    </button>
                </span>
            </div>

            <div className="cart">
                <button className='btn-cart' type='button' onClick={AddCart} >
                    اضافة الي عربة التسوق
                </button>

                <button className='btn-favort' type='button' onClick={AddFavort} >
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    )
}

export default ProudectEnd;