import React from 'react';
import { useState } from 'react';
import InputImgUpload from "../../../images/icon/camera.png";
import Image from "../../../images/icon/woman.png";

export function InputImage(props) {
    const { setUrlImage ,urlimage } = props;
    const [selectedFile, setSelectedFile] = useState(null);  
    
    const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
           // console.log("Called", reader);
            baseURL = reader.result;
           // console.log(baseURL);
            resolve(baseURL);
            setUrlImage(baseURL)
          };
        //  console.log(fileInfo);
        });
    
      };
    
    
      const handleFileSelect = (e) => { 
        console.log(e.target.files[0]);
        //let { files } = state;
        const filesdata = e.target.files[0];
        
        getBase64(filesdata)
        .then(result => {
            filesdata["base64"] = result;
            setSelectedFile(urlimage);
         console.log("File Is", urlimage);
        })
        .catch(err => {
          console.log(err);
        });
      }
    return (
        <div className='input'>
            <label>
                صورة شخصية
            </label>
            
            <div className="imageinput">
              <span className="imgcover">
                <img src={urlimage === undefined ? Image :urlimage} className="img-one" alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }} />
              
                <span className="imginput">
                  <img src={InputImgUpload} alt="" />
                  <input type="file" className="input-file"
                    onChange={e => handleFileSelect(e)} />
                </span>
              </span>

              <button className="btn_save_img" type='button' >
              تغير الصورة الشخصية
            </button>

            </div>
        </div>
    )
}


export function InputName(props) {
    const { name, SetName } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        SetName(value);
    };
    return (
        <div className='input'>
            
        <form>

            <label>اسم المستخدم</label>
            <input type="text"
              className="form-control shadow-none input-fild"
              value={name}
              name="name"
              onChange={handleChange} />

            </form>
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
            <label>رقم الهاتف</label>

            <input className="form-control" type="text" 
            value={Phone === null ? null :Phone}
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

            <input className="form-control" type="text" 
            value={City}
            name="city"
                onChange={handleChange} />

        </div>
    )
}