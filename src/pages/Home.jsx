import React from "react";
import "./css/all.css";

function Home() {
  return (
    <div className="full-page bg-light text-dark">
      {/* Hero Section */}
      <section className="d-flex flex-column justify-content-center align-items-center text-center p-5 bg-primary text-white rounded shadow">
        <h1 className="display-4 fw-bold">Nawaz Solution Services</h1>
        <p className="lead mt-3 w-75 mx-auto">
          Your one-stop solution for Website Development, Maintenance, Domain Registration,
          and Hosting. We help businesses build their online presence with 
          reliable and modern solutions.
        </p>
        <a href="/services" className="btn btn-warning btn-lg mt-3 fw-bold shadow">
          Explore Our Services
        </a>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-code fa-3x text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Modern Development</h5>
                <p className="card-text">
                  We use the latest technologies to build responsive and SEO-friendly websites 
                  tailored to your business.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-server fa-3x text-success mb-3"></i>
                <h5 className="card-title fw-bold">Reliable Hosting</h5>
                <p className="card-text">
                  Fast, secure, and scalable hosting to ensure your website stays 
                  live 24/7 without interruptions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-headset fa-3x text-danger mb-3"></i>
                <h5 className="card-title fw-bold">24/7 Support</h5>
                <p className="card-text">
                  Our team is always ready to help with maintenance, updates, and 
                  technical assistance whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-dark text-white py-5 rounded shadow-lg">
        <h2 className="fw-bold">Let’s Build Your Online Presence 🚀</h2>
        <p className="lead mt-3">
          From domain registration to full website development — Nawaz Solution Services has you covered.
        </p>
        <a href="/contact" className="btn btn-light btn-lg mt-3 fw-bold shadow">
          Get in Touch
        </a>
      </section>
    </div>
  );
}

export default Home;

