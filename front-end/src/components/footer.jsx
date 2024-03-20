import { useState } from "react";

const FooterSection = () => {

    const [year, setYear] = useState();
    const d = new Date();
    if(!year){
        setYear(d.getFullYear());
    }

  return (
    <footer id="footer">
        <i className="bi bi-twitter footer-icons"></i>
        <i className="bi bi-facebook footer-icons"></i>
        <i className="bi bi-instagram footer-icons"></i>
        <i className="bi bi-envelope-fill footer-icons"></i>
        <p className="copyright">© Copyright {year} @Mind&nbsp;Mirror</p>
    </footer>
  );
}

export default FooterSection;