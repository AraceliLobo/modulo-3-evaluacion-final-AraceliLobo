import React from "react";
import notFound from "../images/notfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="character__notfound">
      <Link className="goback-link" to="/">
        <button className="back-btn">Go back</button>
      </Link>
      <img src={notFound} alt="Not found" />
    </div>
  );
};

export default NotFound;
