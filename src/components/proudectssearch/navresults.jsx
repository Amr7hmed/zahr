import React from 'react'

function Navresults(props) {
    const {language ,search ,results}=props;
  return (
    <div className='navresults'>
        <p>
            
            <span className='number'>{results}</span>{" - "}
            <span className="text">{language === "En" ? "results for" : "نتيجة لـ" } </span>{" - "}
            <span className="end">{search}</span>
        </p>
    </div>
  )
}

export default Navresults;