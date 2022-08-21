import React from 'react'

function Paymentform() {
    return (
        <div className='paymentform'>
            <h6>
                تفاصيل الكارت
            </h6>
            <input className="form-control" type="text" placeholder='رقم الكارت' />
            <input className="form-control" type="text" placeholder='اسم صاحب الكارت' />
            <div className="footer">
                <div>
                    <label>
                        تاريخ انتهاء الصلاحية
                    </label>
                    <input className="form-control" type="text" placeholder='شهر/سنة' />
                </div>
                <div>
                    <label>
                        رمز الامن
                    </label>
                    <input className="form-control" type="text" placeholder='الكود' />
                </div>
            </div>
        </div>
    )
}

export default Paymentform