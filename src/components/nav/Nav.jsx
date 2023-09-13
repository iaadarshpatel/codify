import React, { useState} from 'react'
import './nav.css'


const Nav = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
    window.addEventListener('scroll', changeNavbarColor);

  const [show, setShow] = useState(false);

  // Active Navbar on Click
  const [activeNav, setActiveNav] = useState('#')
  const Adarsh = () =>{
    setActiveNav('#');
  }

  return (
    <>
    <section className="navbar-bg">
      <nav className={`navbar navbar-expand-lg navbar-light ${colorChange ? 'navbar colorChange' : 'navbar'}`}>
        <div className="container">
            <a className="navbar-brand" href="">EdiGlobe</a>
              <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a href="#" onClick={Adarsh} className={`nav-link ${activeNav === '#' ? 'active' : ''}`} aria-current="page">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#feature" onClick={() => setActiveNav('#feature')} className={`nav-link ${activeNav === '#feature' ? 'active' : ''}`}>What We Offer</a>
                  </li>
                  <li className="nav-item">
                    <a href="#course" onClick={() => setActiveNav('#course')} className={`nav-link ${activeNav === '#course' ? 'active' : ''}`}>Courses</a>           
                  </li>


                  {/* <li className="nav-item">
                    <a href="#registration" onClick={() => setActiveNav('#registration')} className={`nav-link ${activeNav === '#registration' ? 'active' : ''}`}>Registration</a>
                  </li> */}
                  <li className="nav-item">
                    <a href="#footer" onClick={() => setActiveNav('#footer')} className={`nav-link ${activeNav === '#footer' ? 'active' : ''}`}>Contact Us</a>
                  </li>
                </ul>

                <form className="d-flex">
                  <button href="/login" onClick={() => setActiveNav('/login')} className="btn btn-outline-success" type="submit" >Join Free</button>
                </form>
            </div>
        </div>
    </nav>
    </section>
    </> 
  )
}

export default Nav