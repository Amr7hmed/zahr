import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { Api } from '../../api';
import InputImgUpload from "../../images/icon/camera.png";
import ImageCover from "../../images/icon/woman.png";
import { Authcontext } from '../../store/context';

function InputImag(props) {
    const {Data}=props;
    const [selectedFile, setSelectedFile] = useState("");  
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    
    const [urlimage, setUrlImage] = useState(Data);
    
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
       console.log("File Is", selectedFile);
      })
      .catch(err => {
        console.log(err);
      });
      
    }
    const EditeProfile = () => {
      if(selectedFile === ""){
        {language === "En"?
        swal({text: "Please choose a profile picture !",icon: "warning",buttons: false,timer: 3000})
        :
        swal({text: "يرجي اختيار صورة شخصية",icon: "warning",buttons: false,timer: 3000})
      }
      }else{
        const options = {
          method: "put",
          url: `${Api}update-profile`,
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
      
          data: JSON.stringify({
            image:urlimage
          }),
        };
        axios(options).then(function (response) {
          console.log("handle success");
          console.log(response.messge);
        })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
      }
      };
      //console.log(urlimage);
      console.log(selectedFile);
  
    return (
            <div className="imageinput">
              <span className="imgcover">
                <img src={urlimage === undefined ? ImageCover : urlimage} className="img-one" alt=""
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

              <button className="btn_save_img" type='button' onClick={EditeProfile}>
                {language === "En" ?"Change Profile Picture":"تغير الصورة الشخصية"}
            </button>

            </div>
    );
  }
  

export default InputImag;
