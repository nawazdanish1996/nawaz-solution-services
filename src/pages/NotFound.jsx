import { Link } from "react-router-dom";
import "./css/all.css";

export default function NotFound() {


  return (
    <main className="notfound-page d-flex flex-column align-items-center justify-content-center text-center px-3 py-5">
      <div className="card notfound-card p-4 p-md-5 shadow-sm">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Left: Big code + message */}
          <div className="text-block flex-grow-1">
            <div className="display-1 fw-bold notfound-code" aria-hidden="true">404</div>
            <h1 className="h3 fw-bold mt-2">Page Not Found</h1>
            <p className="text-muted mb-3">
              Oops — the page you're looking for doesn't exist or has been moved.
              But don’t worry — I’ll help you get back on track.
            </p>

            <ul className="list-unstyled text-start small mb-3 reason-list">
              <li>• The URL is mistyped</li>
              <li>• The page was removed or renamed</li>
              <li>• The link you followed is out of date</li>
            </ul>

            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mb-3">
              <Link to="/" className="btn btn-primary btn-lg">
                ⟵ Back to Home
              </Link>
              <Link to="/services" className="btn btn-outline-primary btn-lg">
                Explore Services
              </Link>
            </div>

            <div className="mt-3 small text-muted">
              Still stuck? <a href="mailto:contact.to.nd@gmail.com" className="link-underline">Report this issue</a> or call <a href="tel:+918391809802" className="link-underline">8391809802</a>.
            </div>
          </div>
        </div>

        <div className="mt-4 text-center help-links">
          <small className="text-muted">
            Quick links:
            <Link to="https://nawazdanish1996.github.io/nawaz-solution-services" className="ms-2 me-1">Home</Link> ·
            <Link to="/services" className="mx-1">Services</Link> ·
            <Link to="/about" className="mx-1">About</Link> ·
            <Link to="/contact" className="ms-1">Contact</Link>
          </small>
        </div>
      </div>
    </main>
  );
}
