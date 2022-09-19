import React, { useEffect, useState ,useContext } from 'react'
import { Getprofile } from '../../api/actions.js';
import FormProfile from '../../components/editeprofile/form/index.jsx';
import { Authcontext } from "../../store/context.js";


function EditeProfile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  useEffect(() => { 
    Getprofile(setLoading,setData);
  }, [loading]);

  return (
    <section className='profile'>
      <div className="container">


        <div className="profile__data">
          <div className="profile__header">
            <h3> 
              
            {language === "En" ?"Profile ":"الملف الشخصي"}
            </h3>
          </div>

          <FormProfile data={data} setLoading={setLoading}/>
          </div>
          </div>
          </section>
  )
}

export default EditeProfile;