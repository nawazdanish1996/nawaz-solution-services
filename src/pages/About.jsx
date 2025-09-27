import "./css/all.css";
import Aboutbanner from "../assets/about/aboutbanner.jpg"

function About() {
  return (
    <div className="full-page container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Nawaz Solution Services</h2>
        <p className="text-muted mt-3">
          We are not just building websites, we are building digital experiences 🚀
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={Aboutbanner}
            alt="Our Mission"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">🌟 Our Mission</h4>
          <p className="text-muted">
            At <b>Nawaz Solution Services</b>, our mission is to empower businesses
            by delivering **modern, scalable, and customer-friendly digital solutions**.
            We believe every brand deserves a strong online identity and we work
            tirelessly to make that a reality.
          </p>
          <h4 className="fw-bold mt-4">🎯 Our Vision</h4>
          <p className="text-muted">
            To be recognized as a leading provider of **affordable, reliable, and
            innovative web solutions** that enable startups and businesses to thrive
            in the digital world.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light p-5 rounded shadow mb-5">
        <h3 className="text-center fw-bold mb-4">Why Choose Us?</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="p-3 border rounded h-100">
              <h5>⚡ Fast & Reliable</h5>
              <p className="text-muted small">
                We provide lightning-fast websites with **99.9% uptime hosting**.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3 border rounded h-100">
              <h5>💡 Creative Solutions</h5>
              <p className="text-muted small">
                Our team blends creativity and technology to deliver **unique websites**.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3 border rounded h-100">
              <h5>🤝 Client First</h5>
              <p className="text-muted small">
                We always prioritize **customer satisfaction and long-term success**.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3 border rounded h-100">
              <h5>💻 Expert Team</h5>
              <p className="text-muted small">
                A passionate team of professionals with **expertise in modern web
                technologies**.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h4 className="fw-bold">🚀 Ready to take your business online?</h4>
        <p className="text-muted">
          Partner with <b>Nawaz Solution Services</b> today and let{`'`}s build something amazing together.
        </p>
        <a href="/contact" className="btn btn-primary btn-lg mt-2">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default About;

