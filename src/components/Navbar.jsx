import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-background">
      <a className="navbar-brand" href="#">
        Omar Shalaby
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link " style={{ color: "#ff0" }} href="#">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "#eee" }} href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "#eee" }} href="#">
              Resume
            </a>
          </li>

          <li className="contact-btn">
            <a className="nav-link" style={{ color: "#eee" }} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;