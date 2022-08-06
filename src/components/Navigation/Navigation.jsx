import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <h1 className="nav-title">Servicios</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-75 mx-auto">
          <div className="container-fluid">
            <Link to="/">
              <a className="navbar-brand" href="#">
                Todos
              </a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Link to="/Auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Autos
                    </a>
                  </li>
                </Link>
                <Link to="/Salud">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Salud
                    </a>
                  </li>
                </Link>
                <Link to="/Hogar">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Hogar
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
