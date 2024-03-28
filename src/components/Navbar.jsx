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
        data-target="#navbarNav"
        aria-controls="navbarNav"
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
            <a className="nav-link " style={{ paddingRight: "20px" }} href="#">
              Work<span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ paddingRight: "20px" }} href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ paddingRight: "20px" }} href="#">
              Resume
            </a>
          </li>

          <li className="contact-btn">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
