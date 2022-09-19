import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
//import { FilterSearch } from '../../api/actions';
import { Autocomplete, TextField } from '@mui/material';


function InputSerarch(props) {
  const { language } = props;
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");


    const handleChange = (e) => {
        const value = e.target.value;

        setSearch(value);
        setMessage("")
      };
    
    
      const handleSearch = (e) => {
        e.preventDefault();
        //FilterSearch(search)
      };
      const onKeyUp = (e) => {
        if (e.key === "Enter") {
          console.log(e.key);
          //console.log(search);
        //FilterSearchInput(search)
        }
      }
      const Newarray = [
        { label: 'Test 1', year: 1994 },
        { label: 'Test 2', year: 1972 },
      ]

  return (
    <>
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
    
    </>
  )
}

export default InputSerarch;