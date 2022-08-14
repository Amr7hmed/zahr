import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function PoupeRevewe() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

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
                                تقييم المنتج
                            </h4>
                            <div className='rating'>
                                <Rating onClick={handleRating} ratingValue={rating} size={30} />
                            </div>

                            <div className="massege">
                                <span>
                                    اترك تعليق (اختياري)
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
                            حفظ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoupeRevewe;



