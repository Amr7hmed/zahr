import React from 'react';
import InputImgUpload from "../../../images/icon/camera.png";
import Image from "../../../images/icon/woman.png";

export function InputImage(props) {
    const { setFile } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        setFile(value);
    };


    return (
        <div className='input'>
            <label>
                صورة شخصية
            </label>
            <div className="imageinput">
                <span className="imgcover">
                    <img src={Image} className="img-one" alt=""
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }} />
                    <span className="imginput">
                        <img src={InputImgUpload} alt="" />
                        <input type="file" className="input-file"
                            onChange={handleChange} />
                    </span>
                </span>

            </div>
        </div>
    )
}


export function InputName(props) {
    const { Name, SetName } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        SetName(value);
    };


    return (
        <div className='input'>
            <label>
                اسم المستخدم
            </label>

            <input className="form-control" type="text" value={Name}
                onChange={handleChange} />

        </div>
    )
}


export function InputEmail(props) {
    const { Email, SetEmail } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        SetEmail(value);
    };


    return (
        <div className='input'>
            <label>
            البريد الالكتروني
            </label>

            <input className="form-control" type="text" value={Email}
                onChange={handleChange} />

        </div>
    )
}


export function InputPhone(props) {
    const { Phone, SetPhone } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        SetPhone(value);
    };


    return (
        <div className='input'>
            <label>
رقم الهاتف
            </label>

            <input className="form-control" type="text" value={Phone}
                onChange={handleChange} />

        </div>
    )
}


export function InputCity(props) {
    const { City , SetCity } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        SetCity(value);
    };


    return (
        <div className='input'>
            <label>
                المدينة
            </label>

            <input className="form-control" type="text" value={City}
                onChange={handleChange} />

        </div>
    )
}