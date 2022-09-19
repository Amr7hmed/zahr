import React, { useContext, useState } from 'react';
import Top from "../../images/icon/chevron-up-solid.svg";
import Down from "../../images/icon/chevron-down-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import HeartIcon from "../../images/icon/heart-icon.svg";
import { Authcontext } from '../../store/context';
import { useParams } from 'react-router-dom';
import { AddToCart, AddToFavourite } from '../../api/actions';
import swal from 'sweetalert';

function ProudectEnd(props) {
    const { proudect } = props;
    const { id } = useParams();
    const [number, setNumber] = useState(1);
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const setCart = authcontext.setCart;
    const cart = authcontext.cart;
    const setWishlist = authcontext.setWishlist;
    const wishlist = authcontext.wishlist;


    const Id = parseInt(id);

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

    const addCart = (Id, number) => {
        setCart([...cart, proudect])
        //setShowalertcart(true);
        AddToCart(Id, number)
        if (language === "En") {
            swal("Item Has Been Added !", "", "success");
        } else {
            swal("تمت إضافة المنتج", "", "success");
        }
    }

    const addWishlist = (id) => {
        setWishlist([...wishlist, proudect])
        // setShowalertWishlist(true);

        AddToFavourite(id)
        if (language === "En") {
            swal("Item Has Been Added !", "", "success");
        } else {
            swal("تمت إضافة المنتج", "", "success");
        }
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
                {localStorage.getItem("token") === null ?
                    <button className='btn-cart button-active' data-bs-toggle="modal" data-bs-target="#exampleModalcart">
                        {language === "En" ? "Add To Cart " : "إضافه الى عربة التسوق"}
                    </button>

                    :
                    <button className='btn-cart button-active' type='button' onClick={() => addCart(Id, number)}>
                        {language === "En" ? "Add To Cart " : "إضافه الى عربة التسوق"}
                    </button>
                }
                {localStorage.getItem("token") === null ?
                    <button className='btn-favort' data-bs-toggle="modal" data-bs-target="#exampleModalcart">
                        <img src={HeartIcon} alt="" />
                    </button>
                    :
                    <button className='btn-favort' type='button' onClick={() => addWishlist(Id)}>
                    <img src={HeartIcon} alt="" />
                    </button>
                }
            </div>
        </div>
    )
}

export default ProudectEnd;