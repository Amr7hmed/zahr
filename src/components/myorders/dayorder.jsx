import React, { useContext } from 'react'
import { Authcontext } from '../../store/context';

function Dayorderdata(props) {
    const { Dayorder } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    
    const xmas95 = new Date(Dayorder);
    const day = xmas95.getDate();
    const day1 = xmas95.getDay();
    const fullYear = xmas95.getFullYear();
    const month = xmas95.getMonth();
    const weekar =["الأحد","الأتنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
    const weeken =["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"];
  return (
    <div>
        {language === "En" ?
        weeken[day1] 
        :
        weekar[day1]
        }
        {" "}
        {day}
        {" "}/{" "}
        {month}
        {" "}/{" "}
        {fullYear}

    </div>
  )
}

export default Dayorderdata;