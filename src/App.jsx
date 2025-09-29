import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/css/all.css"; // 👈 import custom CSS
import Whatsapp from "./assets/app/whatsapp.png";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* 🌟 Unique Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
            <i className="fas fa-globe me-2 text-warning"></i> Nawaz Solution Services
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item mx-2">
                <Link className="nav-link custom-nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link custom-nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link custom-nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link custom-nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Call-to-Action WhatsApp Button */}
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://wa.me/918391809802"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp fw-bold px-4 shadow-sm d-flex align-items-center"
              >
                <img src={Whatsapp} className="whatsapp-icon me-2" alt="WhatsApp" />
                +91-8391809802
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nawaz-solution-services" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center p-3 mt-5">
        © {new Date().getFullYear()} Nawaz Solution Services. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
