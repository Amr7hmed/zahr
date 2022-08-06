import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function NavLanguage(props) {
    const { language, setLanguage } = props;

    const Toggolelanguge = () => {
        if (language === "Ar") {
            setLanguage("En")
            localStorage.setItem("language", JSON.stringify("En"));
        } else {
            setLanguage("Ar")
            localStorage.removeItem("language");
        }
    }


    return (
        <div className="navbar__language">

        <button className="btn-lang" >
            <span>
                
            {language === "Ar" ? "الانجليزية" : "العربيه"}
            </span>
            <FontAwesomeIcon icon={faLanguage} />
        </button>
        </div>
    )
}

export default NavLanguage;

/*
   return (
        <button className="btn" onClick={() => Toggolelanguge()}>
            {language === "Ar" ? "En" : "Ar"}

        </button>
    )
}

*/