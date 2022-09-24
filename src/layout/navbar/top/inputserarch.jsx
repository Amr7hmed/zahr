import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
//import { FilterSearch } from '../../api/actions';
import { Autocomplete, TextField } from '@mui/material';
import { Authcontext } from '../../../store/context';
import { FilterSearchCategorey, FilterSearchInput, GetCategories } from '../../../api/actions';


function InputSerarch(props) {
  const {categories , loading}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");
  
    
  const Arraycategoriesprent=[];

  if(language === "En") {
    const options =categories.map(item=>{
      Arraycategoriesprent.push(
        {label: item.name_en, id: item.id }
      )
    });
  }else{
    const options =categories.map(item=>{
      Arraycategoriesprent.push(
        {label: item.name_ar, id: item.id }
      )
    });
  }

    
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const check = Newarray.every(item => {
      return item.label !== e.target.defaultValue
  })
  if (check) {
    console.log("yes");
  } else {
    FilterSearchCategorey(e.target.defaultValue)
  }
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      //console.log(search);
    FilterSearchInput(search)
    }
  }

  
    const Newarray=[...Arraycategoriesprent];

  return (
  
    <>
    
    {loading === false ? (
          ""
        ) : (

    <div className="navbar__search">
    <Autocomplete
      disablePortal
      id="disable-close-on-select"
      disableCloseOnSelect
      options={Newarray}
      
      renderInput={(params) => 
        <TextField {...params} label={language === "En" ? "Search" : "بحث" }
        placeholder={language === "En" ? "Search ?" : "عن ماذا تبحث ؟" } 
        onKeyPress={onKeyUp}
        onChange={handleChange}
        onSelect={handleSearch}
        autoComplete="off"
        variant="standard" 
        />}
        />
    </div>

)}

    </>

  )
}

export default InputSerarch;
