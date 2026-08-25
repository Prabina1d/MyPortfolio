import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        Prabina<span>.</span>
      </a>

      {/* Desktop Navigation */}
      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#blog" onClick={closeMenu}>
          Blog
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      {/* GitHub */}
      <a
        href="https://github.com/Prabina1d"
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        GitHub
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;