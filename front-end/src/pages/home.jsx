import Loader from "../components/loader";
import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FooterSection from "../components/footer";

const Home = () => {
    const Navigate = useNavigate();
    const [loader, setloader] = useState(false);
    

    function handleLogin(e){
        e.preventDefault();
        setloader(true);
        Navigate("/login");
    }
    
    function handleRegister(e){
        e.preventDefault();
        setloader(true);
        Navigate("/register");
    }

    return (
        <div>
            {loader && <Loader />}

  <section id="title">

    <div className="container-fluid">

      {/* <!-- Nav Bar --> */}

      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbar-brand">Mind Mirror</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimoninals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">Follow Us</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Title --> */}

      <div className="row">
        <div className="col-lg-6 title-divs">
          <h1 className="main-subject">Your new favourite Personal Diary.</h1>
          {/* <!-- reference website for icons is fontawesome.com  --> */}
            <button className="btn btn-dark btn-lg download-button" type="button" onClick={handleLogin}>
              Log in
            </button>
            <button className="btn btn-outline-light btn-lg download-button" type="button" onClick={handleRegister}>
              Sign Up
            </button>
        </div>

        <div className="col-lg-6">
          <img className="title-image" src={require("./images/iphone6.png")} alt="iphone-mockup" />
        </div>
      </div>
    </div>

  </section>

  {/* <!-- Features --> */}

  <section id="features">
    <div className="row">
      <div className="feature-box col-lg-4">
        <i className="bi bi-check-circle-fill features-icons"></i>
        <h3>Easy to use</h3>
        <p>User-friendly interface for effortless navigation</p>
      </div>
      <div className="feature-box col-lg-4">
        <i className="bi bi-heart-fill features-icons"></i>
        <h3>Seamless Expression</h3>
        <p>Furnish with expressive narrative composition</p>
      </div>
      <div className="feature-box col-lg-4">
        <i className="bi bi-shield-lock-fill features-icons"></i>
        
        <h3>Privacy</h3>
        <p>Encrypted for utmost confidentiality and security</p>
      </div>
      
    </div>

  </section>

  {/* <!-- Testimonials --> */}

  <section id="testimonials">
        <h2 className="text-center testimonial-heading">See what our users say about us.</h2>
        <button className="testimonial-button">They already love our products 😍</button>

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h2>Fantastic diary tool! Easy to use, and the encryption feature ensures my privacy. Highly recommend!</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D4D03AQGjij-Q_zfcUg/profile-displayphoto-shrink_400_400/0/1703395984823?e=1715817600&v=beta&t=Cn4kBb1Ti8Vt4x8t_ZlxzP-XSX7fI-QGtR5HBNOsM_w" alt="dog-profile" />
          <br />
          <em>Shiva, Mahabubnagar</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">Secure encryption gives peace of mind. Simple design makes daily logging a pleasure.</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D5635AQGFjnpn3neSdg/profile-framedphoto-shrink_400_400/0/1705687801296?e=1711173600&v=beta&t=7zVs5UpQjzGITJS5OeGlaFnz_TOExyjLDsdPhk9gJVs" alt="lady-profile" />
          <br />
          <em>Dinesh, Bengaluru</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">Absolutely love the simplicity and security. Perfect for documenting my daily thoughts and adventures.</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D4D03AQHJeC9uzVeZjA/profile-displayphoto-shrink_400_400/0/1683901265293?e=1715817600&v=beta&t=x3YNDfhy7NW892VvqY0uN-dYPWg364lcfQRcOixkO6s" alt="lady-profile" />
          <br />
          <em>Jashwanth, Hyderabad</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">Intuitive interface, love the privacy settings. Perfect for journaling my thoughts and memories.</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D5603AQGdjNEAUnYnYg/profile-displayphoto-shrink_400_400/0/1687165693401?e=1715817600&v=beta&t=CDgo3MOUrGBMHP43tVxclGiORI_gfpc68xTwdiB6T7E" alt="lady-profile" />
          <br />
          <em>Pranav, Guntur</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">Sleek design, easy to navigate, and love the privacy options. My go-to for daily reflections.</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D5635AQF66bmy6whpvQ/profile-framedphoto-shrink_400_400/0/1706802048618?e=1711177200&v=beta&t=Mr41g183r4YQeueCNGV5UEmvzAP9hIFFYeJbQncnltI" alt="lady-profile" />
          <br />
          <em>J Pavan, Hyderabad</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">Smooth interface, love the encryption for privacy. Helps me stay organized and introspective.</h2>
          <img className="testimonial-image" src="https://media.licdn.com/dms/image/D4D03AQGejOtAU7z_TA/profile-displayphoto-shrink_400_400/0/1699202894406?e=1715817600&v=beta&t=HxANI0KOcDHIRGc0BD7Y1G-4yvf41Bs3Wru8q53edTI" alt="lady-profile" />
          <br />
          <em>Venky, Amaravati</em>
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  </section>

  {/* <!-- Call to Action --> */}

  <section id="cta">

    <div>
      <h2 className="cta-text text-center">Find the True Love of Your Life Today.</h2>
      <div className="text-center">
        <button className="btn btn-dark btn-lg download-button" type="button" onClick={handleLogin}>
          Log in
        </button>
        <button className="btn btn-light btn-lg download-button" type="button" onClick={handleRegister}>
          Sign Up
        </button>
      </div>
    </div>

  </section>

  {/* <!-- Footer --> */}

  <FooterSection  />




</div>
    );
}

export default Home;