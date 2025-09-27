import "./css/all.css";

function Services() {
  return (
    <div className="full-page bg-light text-dark">
      {/* Hero Section */}
      <section className="text-center py-5 bg-primary text-white shadow">
        <h1 className="fw-bold">Our Services</h1>
        <p className="lead mt-3 w-75 mx-auto">
          At <strong>Nawaz Solution Services</strong>, we deliver complete web solutions 
          — from creating modern websites to keeping them running, securing your domain, 
          and hosting with reliability. Explore what we offer 🚀
        </p>
      </section>

      {/* Services Grid */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card service-card h-100 shadow border-0 text-center p-4">
              <i className="fas fa-laptop-code fa-3x text-primary mb-3"></i>
              <h5 className="fw-bold">Website Development</h5>
              <p>
                We craft responsive, SEO-optimized, and modern websites tailored to your 
                brand identity. From business sites to e-commerce stores, we bring your 
                ideas online.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card service-card h-100 shadow border-0 text-center p-4">
              <i className="fas fa-tools fa-3x text-success mb-3"></i>
              <h5 className="fw-bold">Website Maintenance</h5>
              <p>
                Regular updates, backups, bug fixes, and speed optimizations. 
                We keep your website secure, fast, and always up-to-date.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card service-card h-100 shadow border-0 text-center p-4">
              <i className="fas fa-globe fa-3x text-warning mb-3"></i>
              <h5 className="fw-bold">Domain Registration</h5>
              <p>
                Get the right domain name at the best price. We provide hassle-free 
                domain registration and management for your business.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card service-card h-100 shadow border-0 text-center p-4">
              <i className="fas fa-server fa-3x text-danger mb-3"></i>
              <h5 className="fw-bold">Hosting Services</h5>
              <p>
                Reliable, secure, and fast hosting solutions to ensure your website 
                stays online 24/7 with 99.9% uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-5 shadow-sm">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">How We Work</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="step-box p-3">
                <i className="fas fa-comments fa-2x text-primary mb-2"></i>
                <h6>Consultation</h6>
                <p>We discuss your needs and goals in detail.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box p-3">
                <i className="fas fa-pencil-ruler fa-2x text-success mb-2"></i>
                <h6>Planning</h6>
                <p>We design a roadmap tailored for your business.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box p-3">
                <i className="fas fa-code fa-2x text-warning mb-2"></i>
                <h6>Development</h6>
                <p>We build your website with modern tools.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box p-3">
                <i className="fas fa-rocket fa-2x text-danger mb-2"></i>
                <h6>Launch</h6>
                <p>Your website goes live with full support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our Pricing Plans</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center shadow border-0">
              <div className="card-header bg-primary text-white">
                <h4>Basic</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>1 Website</li>
                  <li>Basic Design</li>
                  <li>Free Domain (1 yr)</li>
                  <li>Email Support</li>
                </ul>
                <a href="/contact" className="btn btn-outline-primary">Get Started</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow border-0">
              <div className="card-header bg-success text-white">
                <h4>Standard</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Up to 5 Pages</li>
                  <li>SEO Friendly</li>
                  <li>Domain + Hosting</li>
                  <li>Priority Support</li>
                </ul>
                <a href="/contact" className="btn btn-outline-success">Choose Plan</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow border-0">
              <div className="card-header bg-danger text-white">
                <h4>Premium</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Unlimited Pages</li>
                  <li>Domain + Hosting</li>
                  <li>24/7 Support</li>
                  <li>Call or Email</li>
                </ul>
                <a href="/contact" className="btn btn-outline-danger">Go Premium</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-dark text-white py-5">
        <h2 className="fw-bold">Ready to Grow Your Business Online?</h2>
        <p className="lead mt-3">
          Partner with Nawaz Solution Services for your digital success story.
        </p>
        <a href="/contact" className="btn btn-warning btn-lg fw-bold shadow">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

export default Services;
