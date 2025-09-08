const Navbar = ({ setCategory }) => {
  const handleClick = (e, category) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge text-bg-danger fs-4">NewsTIME</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link cursor-pointer"
                onClick={(e) => handleClick(e, "technology")}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link cursor-pointer"
                onClick={(e) => handleClick(e, "business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link cursor-pointer"
                onClick={(e) => handleClick(e, "health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link cursor-pointer"
                onClick={(e) => handleClick(e, "sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link cursor-pointer"
                onClick={(e) => handleClick(e, "entertainment")}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
