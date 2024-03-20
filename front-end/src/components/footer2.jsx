import { useState } from "react";

const FooterSection2 = () => {

    const [year, setYear] = useState();
    const d = new Date();
    if(!year){
        setYear(d.getFullYear());
    }

    let styleofFooter2 = {
        width: "100%",
        "textAlign" : "center",
        "bottom" : "0",
        "backgroundColor" : "#2F0C49",
        "color" : "white",
        padding : "10px 0",
        "fontWeight": "bold",
        position:"fixed"
    }




  return (
    <div className="footer2" style={styleofFooter2}>
        <i className="bi bi-twitter social-media-icons" style={{padding:"0 10px", cursor:"pointer"}}></i>
        <i className="bi bi-facebook social-media-icons" style={{padding:"0 10px", cursor:"pointer"}}></i>
        <i className="bi bi-instagram social-media-icons" style={{padding:"0 10px", cursor:"pointer"}}></i>
        <i className="bi bi-envelope-fill social-media-icons" style={{padding:"0 10px", cursor:"pointer"}}></i>
        <div>© Mind&nbsp;Mirror {year}</div>
    </div>
  );
}

export default FooterSection2;