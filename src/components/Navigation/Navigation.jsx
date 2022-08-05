import React from 'react';
import './style.css';

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <h1 className="nav-title">Servicios</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-75 mx-auto">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Todos
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Autos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Salud
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Hogar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
