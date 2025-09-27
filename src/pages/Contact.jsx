import "./css/all.css";
import React from "react";

function Contact() {
  return (
    <div className="full-page container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get in Touch with Nawaz Solution Services</h2>
        <p className="lead text-muted mt-3">
          We are here to answer your queries and provide expert guidance for your digital needs. 
          Reach out to us and we’ll get back to you as quickly as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="row justify-content-center g-4 mb-5">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow rounded text-center p-4 h-100 contact-card">
            <i className="fas fa-phone fa-3x text-primary mb-3"></i>
            <h5 className="fw-bold mb-2">Call Us</h5>
            <p className="text-muted mb-0">📱 Mobile: <a href="tel:+918391809802" className="text-decoration-none">+91-8391809802</a></p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow rounded text-center p-4 h-100 contact-card">
            <i className="fas fa-envelope fa-3x text-success mb-3"></i>
            <h5 className="fw-bold mb-2">Email Us</h5>
            <p className="text-muted mb-0">✉️ Email: <a href="mailto:contact.to.nd@gmail.com" className="text-decoration-none">contact.to.nd@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Additional Message Section */}
      <div className="text-center bg-light shadow rounded p-5">
        <h4 className="fw-bold mb-3">Why Contact Us?</h4>
        <p className="text-muted mb-4">
          Whether you’re looking for professional website development, domain registration, 
          hosting services, or website maintenance, we are here to provide personalized 
          solutions that suit your business needs.  
        </p>
        <p className="text-muted">
          Our team at <strong>Nawaz Solution Services</strong> is always ready to guide you step by step. 
          Contact us today and let’s build your online presence together! 🚀
        </p>
      </div>
    </div>
  );
}

export default Contact;
