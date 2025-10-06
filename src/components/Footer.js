import logo from "../images/Logo .svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="little lemon" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
