import {Link} from "react-router-dom";

export default function Footer(){
  return <footer>
    <div className="footer-grid container">
      <div>
        <Link className="brand footer-brand" to="/">
          <span className="brand-symbol"><i/><i/><i/><i/></span>
          <span className="brand-copy">TENDIA<small>PRINTING STUDIO</small></span>
        </Link>
        <p>Quality Printing | Apparel Supply | Branding</p>
        <p className="muted">✨ Your vision, printed perfectly ✨</p>
      </div>
      <div>
        <h4>Explore</h4>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/gallery">Our Work</Link>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="https://wa.me/27754439922" target="_blank" rel="noreferrer">WhatsApp 075 443 9922</a>
        <span>Randfontein, Gauteng</span>
      </div>
    </div>
    <div className="footer-bottom container">
      <span>© {new Date().getFullYear()} TENDIA PRINTING</span>
      <span>Quality printing. Bold results.</span>
    </div>
  </footer>
}