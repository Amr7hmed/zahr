import React, { useContext } from 'react';
import { useState } from 'react';
import InputImgUpload from "../../../images/icon/camera.png";
import Image from "../../../images/icon/woman.png";
import { Authcontext } from '../../../store/context';
/*
export function InputImage(props) {
    const { setUrlImage ,urlimage } = props;
    const [selectedFile, setSelectedFile] = useState(null);  
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
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
                {language === "En" ? "Profile Picture" : "صورة شخصية"}
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
                {language === "En" ?"Change Profile Picture":"تغير الصورة الشخصية"}
            </button>

            </div>
        </div>
    )
}
*/
export function InputName(props) {
    const { name, SetName ,validation} = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const handleChange = (e) => {
        const value = e.target.value;
        SetName(value);
    };
    return (
        <div className='input'>
            
        <form>
            <label>
                {language === "En" ? "User Name " : "اسم المستخدم"}
            </label>
            <input type="text"
              className={validation === false && name === "" ? 
              "form-control shadow-none input-fild is-invalid" : "form-control shadow-none input-fild"} 
              value={name}
              name="name"
              onChange={handleChange} />

            </form>
        </div>
    )
}


export function InputEmail(props) {
    const { Email, SetEmail ,validation } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const handleChange = (e) => {
        const value = e.target.value;
        SetEmail(value);
    };


    return (
        <div className='input'>
            <label>
                {language === "En" ? "Email" : "البريد الالكتروني"}
            </label>

            <input  type="text" value={Email}
              className={validation === false && Email === "" ? 
              "form-control shadow-none input-fild is-invalid" : "form-control shadow-none input-fild"} 
                onChange={handleChange} />

        </div>
    )
}


export function InputPhone(props) {
    const { Phone, SetPhone ,validation} = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const handleChange = (e) => {
        const value = e.target.value;
        SetPhone(value);
    };


    return (
        <div className='input'>
            <label>
                {language === "En" ? "Phone Number" : "رقم الهاتف"}
            </label>

            <input type="text" 
              className={validation === false && Phone === "" ? 
              "form-control shadow-none input-fild is-invalid" : "form-control shadow-none input-fild"} 
            value={Phone === null ? null :Phone}
                onChange={handleChange} />

        </div>
    )
}


export function InputCity(props) {
    const { City , SetCity ,validation} = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const handleChange = (e) => {
        const value = e.target.value;
        SetCity(value);
    };


    return (
        <div className='input'>
                {language === "En" ? "City" : "المدينة"}

            <input 
              className={validation === false && City === "" ? 
              "form-control shadow-none input-fild is-invalid" : "form-control shadow-none input-fild"} 
              type="text" 
            value={City}
            name="city"
                onChange={handleChange} />

        </div>
    )
}