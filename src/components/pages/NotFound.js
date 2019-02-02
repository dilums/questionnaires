import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container my-5 text-center .dialogue-box">
      <h1 className="text-center my-3">Oops !</h1>
      <h2 className="text-center my-3">404 Page Not Found</h2>
      <Link to="/" className="btn btn-warning text-uppercase my-3">
        back home
      </Link>
    </div>
  );
};

export default NotFound;
