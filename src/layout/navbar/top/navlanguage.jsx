import React, { useContext } from 'react';
import RedFlag from "../../../images/icon/red-flag.png";
import { Authcontext } from '../../../store/context';

function NavLanguage() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const setLanguage = authcontext.setLanguage;

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

        <button className="btn-lang" onClick={() => Toggolelanguge()}>
            <span>
            {language === "Ar" ? "الانجليزية" : "العربيه"}
            </span>
            <img src={RedFlag} alt="Red Flag" />
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