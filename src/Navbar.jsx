import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
      <Link
              to="/"
              className="nav-link active text-white fs-5 ms-4"
              aria-current="page"
            >
              SIMULADOR DE PROCESOS
            </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/lifo"
              className="nav-link active text-white fs-5"
              aria-current="page"
            >
              LIFO
            </Link>
            <Link
              to="/fifo"
              className="nav-link active text-white fs-5"
              aria-current="page"
            >
              FIFO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
