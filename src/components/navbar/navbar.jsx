
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-icon">J</span>
        <span>junji<span className="logo-dot">.</span>dev</span>
      </a>

      <div className="navbar-section">
        <a href="#home" className="navbar-link active">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About
        </a>
        <a href="#projects" className="navbar-link">
          Projects
        </a>
      </div>

      <a href="#contact" className="navbar-contact">
        Let's talk <span>↗</span>
      </a>
    </nav>
  );
}
