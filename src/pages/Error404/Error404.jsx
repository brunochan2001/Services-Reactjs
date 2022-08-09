import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 no encontrado</h2>
            <div className="error-details">
              Lo sentimos, ha ocurrido un error, ¡la página solicitada no se
              encuentra!
            </div>
            <div className="error-actions">
              <Link to="/">
                <button className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home"></span>
                  Ir a Pagina Principal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
