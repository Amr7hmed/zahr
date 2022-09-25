import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AddRevwe } from '../../api/actions';
import { Authcontext } from '../../store/context';

function PoupeRevewe(props) {
    const { Id} = props;
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const handleRating = (e) => {
        let value = e / 20;
        setRating(value)
    }



    const handleChange = (e) => {
        const value = e.target.value;
        setMessage(value)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        console.log(rating);
        AddRevwe(Id,rating,message);
        setRating(0)
        setMessage("")
    };


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            <h4>
            {language === "En" ? "Product Rating" : "تقييم المنتج"}
                            </h4>
                            <div className='rating'>
                                <Rating onClick={handleRating} ratingValue={rating} size={30} />
                            </div>

                            <div className="massege">
                                <span>
            {language === "En" ? "Leave A Comment" : "اترك تعليق"}
                                     
                                </span>


                                <textarea className="form-control"
                                    name="message"
                                    value={message || ''}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn" type="button" onClick={handleSubmit}>
            {language === "En" ? "Save" : "حفظ"}
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoupeRevewe;



